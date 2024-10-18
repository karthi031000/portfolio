# Generated by Django 5.1.2 on 2024-10-18 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Jobs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Organisation', models.CharField(max_length=200)),
                ('Job_title', models.CharField(max_length=200)),
                ('years', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Technology', models.CharField(max_length=200)),
                ('Title', models.CharField(max_length=200)),
                ('Description', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Technology', models.CharField(max_length=200)),
            ],
        ),
    ]
