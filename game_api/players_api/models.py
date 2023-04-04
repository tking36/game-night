from django.db import models


class Player(models.Model):
    name = models.CharField(max_length=50)
    score = models.IntegerField(default=0)
    wins = models.IntegerField(default=0)
    champion = models.IntegerField(default=0)
