from django.db import models
from django.utils import timezone

class Googlesheet(models.Model):
    nomer = models.IntegerField(default=0, null=False, verbose_name='№')
    zakaz = models.IntegerField(default=0, null=False, verbose_name='Закакз №')
    price_d = models.IntegerField(default=0, null=False, verbose_name='стоимость,$')
    price_r = models.IntegerField(default=0, null=False, verbose_name='стоимость,руб.')
    data = models.DateField(default=timezone.now, null=True, blank=True, verbose_name='срок поставки')
    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

