# Generated by Django 2.1.7 on 2020-03-02 02:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20200302_0825'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mytodolist',
            name='date_time',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
