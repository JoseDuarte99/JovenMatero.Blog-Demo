from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView,
)
from django.urls import path
from .views import LogoutView, UserViewSet, RegisterView

router = DefaultRouter()
router.register(r'users', UserViewSet)

# Routes created by default
    # GET     /users/         → user list
    # POST    /users/         → create user
    # GET     /users/{id}/    → see datail
    # PUT     /users/{id}/    → complete update
    # PATCH   /users/{id}/    → partial update
    # DELETE  /users/{id}/    → delete

urlpatterns = router.urls + [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/logout/', LogoutView.as_view(), name='token_blacklist'),
    path('auth/register/', RegisterView.as_view(), name='auth_register'),
]
