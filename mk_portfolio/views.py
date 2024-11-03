from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import *
# Create your views here.

def index(request):
    context = {}
    template = loader.get_template("mk_portfolio/index.html")
    job_title = list(Job.objects.values_list("Job_title", flat=True))
    print(job_title)
    # context.update({"Jobs": job_title})
    org = list(Job.objects.values_list("Organisation", flat=True))
    # context.update({"Org": org})
    years = list(Job.objects.values_list("years", flat=True))
    # context.update({"Years":years})
    grand_list = list(zip(years, org, job_title))
    print("grand", grand_list)
    context = {'grand' : grand_list, }
    print("Context", context)
    return HttpResponse(template.render(context, request))