# Generated by Django 4.2.2 on 2023-06-30 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_empregado_feriasentrada_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empregado',
            name='entrada',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='empregado',
            name='feriasEntrada',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='empregado',
            name='feriasSaida',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='empregado',
            name='saida',
            field=models.DateField(null=True),
        ),
    ]
