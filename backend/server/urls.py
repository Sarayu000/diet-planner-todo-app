# D:\react\backend\server\urls.py
from django.contrib import admin # This line is mandatory here
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin only goes here
    path('api/', include('api.urls')), # This points to the file we fixed above
]