from rest_framework import viewsets
from .serializers import UserSerialzer
from .models import User

class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializers_class = UserSerialzer 

