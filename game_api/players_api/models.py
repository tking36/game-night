from django.db import models


class Player(models.Model):
    name = models.CharField(max_length=50)
    wins = models.IntegerField()
    champion = models.IntegerField()
