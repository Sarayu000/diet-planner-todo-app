from django.db import models

class DietPlan(models.Model):
    person_name = models.CharField(max_length=100)
    age = models.IntegerField()
    food_name = models.CharField(max_length=100)
    calories = models.IntegerField()
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.person_name} - {self.food_name}"