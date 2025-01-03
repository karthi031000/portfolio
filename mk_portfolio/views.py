from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import *
# Create your views here.

def index(request):
    context = {}
    template = loader.get_template("mk_portfolio/index.html")
    job_title = list(Job.objects.values_list("Job_title", flat=True))
    # context.update({"Jobs": job_title})
    org = list(Job.objects.values_list("Organisation", flat=True))
    # context.update({"Org": org})
    years = list(Job.objects.values_list("years", flat=True))
    # context.update({"Years":years})
    grand_list = list(zip(years, org, job_title))
    context.update({'grand' : grand_list})
    skill = list(Skill.objects.values_list("Technology", flat=True))
    context.update({'skill' : skill})
    project = list(Project.objects.values_list("Project", flat=True))
    project_desc = list(Project.objects.values_list("Description", flat=True))
    grand_proj = list(zip(project, project_desc))
    context.update({'project' : grand_proj})
    print(context)
    return HttpResponse(template.render(context, request))