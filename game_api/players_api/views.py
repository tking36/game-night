from django.shortcuts import render
from rest_framework import generics
from .serializers import PlayerSerializer
from .models import Player


class PlayerList(generics.ListCreateAPIView):
    queryset = Player.objects.all().order_by('id')
    serializer_class = PlayerSerializer


class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Player.objects.all().order_by('id')
    serializer_class = PlayerSerializer
