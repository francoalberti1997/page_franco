from django.db import models

# Create your models here.

class Proyecto(models.Model):
    nombre = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    motivo = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50)

class Campo(models.Model):
    nombre = models.CharField(max_length=50)
    imagen = models.ImageField()
    def __str__(self):
        return self.nombre
    
class Habilidad(models.Model):
    nombre = models.CharField(max_length=50)
    imagen = models.ImageField()
    campo = models.ForeignKey(Campo, on_delete=models.CASCADE)