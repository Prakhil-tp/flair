# Generated by Django 2.1.1 on 2018-09-25 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0010_auto_20180925_1313'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userlist',
            name='favourite',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='userlist',
            name='watch_later',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='userlist',
            name='watched',
            field=models.BooleanField(default=False),
        ),
    ]