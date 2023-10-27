from rest_framework import serializers
from .models import Proyecto, Campo, Habilidad

class ProyectoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Proyecto  
        fields = "__all__"

class CampoSerializers(serializers.ModelSerializer):

    class Meta:
        model = Campo  
        fields = "__all__"

class HabilidadSerializers(serializers.ModelSerializer):
    campo = serializers.StringRelatedField()

    class Meta:
        model = Habilidad  
        fields = "__all__"
        