from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from .models import Post

@receiver(post_delete, sender=Post)
def delete_post_image(sender, instance, **kwargs):
    if instance.image and instance.image.name != 'posts/post_default.png':
        instance.image.delete(save=False)

@receiver(pre_save, sender=Post)
def delete_old_post_image(sender, instance, **kwargs):
    if not instance.pk:
        return
    try:
        old_image = Post.objects.get(pk=instance.pk).image
    except Post.DoesNotExist:
        return
    new_image = instance.image
    if old_image and old_image != new_image and old_image.name != 'posts/post_default.png':
        old_image.delete(save=False)
