from django.db import models
from django.utils import timezone
from django.conf import settings
from PIL import Image


# Category ------------------------------------------------------------------------------------

class Category(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.name



# Tags ------------------------------------------------------------------------------------

class Tag(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.name



# Post ------------------------------------------------------------------------------------

class Post(models.Model):
    title = models.CharField(max_length=50, unique=True)
    subtitle = models.CharField(max_length=100, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    text = models.TextField()
    active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='posts', default='posts/post_default.png', blank=True, null=True)
    published = models.DateTimeField(default=timezone.now)
    tags = models.ManyToManyField(Tag, related_name='posts')

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.image:
            img = Image.open(self.image.path)
            if img.height > 520 or img.width > 450:
                output_size = (520, 450)
                img.thumbnail(output_size)
                img.save(self.image.path, quality=90)



# Comments ------------------------------------------------------------------------------------

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='comments')
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text[:50]
