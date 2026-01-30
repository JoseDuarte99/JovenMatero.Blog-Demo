from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractUser
from simple_history.models import HistoricalRecords
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver

# Create your models here.

# USER ------------------------------------------------------------------------------
class User(AbstractUser):
    email = models.EmailField(unique=True, blank=False)
    image = models.ImageField(null=True, blank=True, upload_to='users', default='users/user-default.jpg')
    is_staff = models.BooleanField(default=False)  # Staff status
    is_active = models.BooleanField(default=True)  # Active status
    historical = HistoricalRecords()   

    def get_absolute_url(self):
        return reverse('index')

    def delete(self, using=None, keep_parents=False):
        if self.image and self.image.name != 'users/user-default.jpg':
            # Delete image from file system
            self.image.delete(save=False)
        super().delete(using=using, keep_parents=keep_parents)

    
@receiver(post_delete, sender=User)
def delete_user_image(sender, instance, **kwargs):
    if instance.image and instance.image.name != 'users/user-default.jpg':
        instance.image.delete(save=False)


@receiver(pre_save, sender=User)
def delete_old_image(sender, instance, **kwargs):
    if not instance.pk:
        return
    try:
        old_image = User.objects.get(pk=instance.pk).image
    except User.DoesNotExist:
        return
    new_image = instance.image
    if old_image and old_image != new_image and old_image.name != 'users/user-default.jpg':
        old_image.delete(save=False)


# SUBSCRIPTION ------------------------------------------------------------------------------
class Subscription(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email