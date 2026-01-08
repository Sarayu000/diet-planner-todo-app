from rest_framework import viewsets
from .models import DietPlan
from .serializers import DietPlanSerializer

class DietPlanViewSet(viewsets.ModelViewSet):
    queryset = DietPlan.objects.all()
    serializer_class = DietPlanSerializer