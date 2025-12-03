from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractUser
from simple_history.models import HistoricalRecords

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True, blank=False)
    image = models.ImageField(null=True, blank=True, upload_to='users', default='users/user-default.jpg')
    is_staff = models.BooleanField(default=False)  # Staff status
    is_active = models.BooleanField(default=True)  # Active status
    historical = HistoricalRecords()   

    def get_absolute_url(self):
        return reverse('index')

    def delete(self, using=None, keep_parents=False):
        # Delete image from file system
        self.image.delete(save=False)
        super().delete(using=using, keep_parents=keep_parents)


class Subscription(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email