from django.db import models

# Create your models here.
class Job(models.Model):
    Organisation = models.CharField(max_length=200)
    Job_title = models.CharField(max_length=200)
    years = models.CharField(max_length=200)

class Certificate(models.Model):
    Title = models.CharField(max_length=200)

class Skill(models.Model):
    Technology = models.CharField(max_length=200)