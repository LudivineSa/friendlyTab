from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from friendlyTab.views import UserAPIView

router = routers.DefaultRouter()
router.register('user', UserAPIView, basename='user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
