# Generated by Django 5.1.2 on 2024-11-07 05:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mk_portfolio', '0002_certificates'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Certificates',
            new_name='Certificate',
        ),
    ]
