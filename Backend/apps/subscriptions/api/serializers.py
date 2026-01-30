from rest_framework import serializers
from ..models import Subscription

class SubscriptionSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    
    class Meta:
        model = Subscription
        fields = ['id', 'email', 'created_at']

    def validate_email(self, value):
        if Subscription.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este email ya está registrado.")
        return value