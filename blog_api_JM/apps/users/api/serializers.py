from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from django.contrib.auth import get_user_model



User = get_user_model()

class UserSerializer (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'image', 'first_name', 'last_name']
        read_only_fields = ['id', 'username', "password"]

# ----------------------------------------------------------

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    first_name = serializers.CharField(min_length=2)
    last_name = serializers.CharField(min_length=2)
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name', 'email', 'image']

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este email ya está registrado.")
        return value
    
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("El nombre de usuario ingresado no está disponible.")
        return value
    

    def validate_password(self, value):
        try:
            validate_password(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError("Revisá los requisitos de seguridad para la contraseña.")
        return value


    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        refresh = RefreshToken.for_user(user)
        return user
        # Send token after registration
        # return {
        #     'user': user,
        #     'refresh': str(refresh),
        #     'access': str(refresh.access_token),
        # }

