from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SubscriptionSerializer
from rest_framework.permissions import AllowAny

class SubscriptionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = SubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "¡Suscripción correcta!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
