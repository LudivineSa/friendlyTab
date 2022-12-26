from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.hashers import make_password

from .models import User
from .serializers import UserSerializer

# Create your views here.
class UserAPIView(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, validated_data):
        data = validated_data.data
        data['password'] = make_password(data['password'])
        return super().create(validated_data)
