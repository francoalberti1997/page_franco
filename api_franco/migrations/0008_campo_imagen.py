# Generated by Django 4.2.5 on 2023-10-25 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_franco', '0007_habilidad_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='campo',
            name='imagen',
            field=models.ImageField(default='', upload_to=''),
            preserve_default=False,
        ),
    ]
