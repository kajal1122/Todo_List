# Generated by Django 2.1.7 on 2020-03-02 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20200229_2227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mytodolist',
            name='date_time',
            field=models.DateField(auto_now_add=True),
        ),
    ]
