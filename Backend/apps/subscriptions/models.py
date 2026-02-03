from django.db import models


# SUBSCRIPTION ------------------------------------------------------------------------------
class Subscription(models.Model):
    email = models.EmailField(unique=True)   # evita duplicados
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
