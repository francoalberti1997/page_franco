# Generated by Django 4.2.5 on 2023-10-25 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_franco', '0006_campo_habilidad'),
    ]

    operations = [
        migrations.AddField(
            model_name='habilidad',
            name='imagen',
            field=models.ImageField(default='', upload_to=''),
            preserve_default=False,
        ),
    ]