from rest_framework import serializers
from .models import Googlesheet

class GooglesheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Googlesheet
        fields = ('nomer', 'zakaz', 'price_d', 'price_r', 'data')