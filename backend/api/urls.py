# D:\react\backend\api\urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DietPlanViewSet

# Initialize the router
router = DefaultRouter()
router.register(r'items', DietPlanViewSet)

urlpatterns = [
    path('', include(router.urls)),
]