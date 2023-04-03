from django.urls import path
from . import views

urlpatterns = [
    path('api/players', views.PlayerList.as_view(), name='player_list'),
    path('api/players/<int:pk>', views.PlayerDetail.as_view(), name='player_detail'),
]
