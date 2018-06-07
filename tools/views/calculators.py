from django.shortcuts import render
import json, xmltodict
from django.http import JsonResponse


def calculators(request):
    return render(request, 'tools/tools/calc/calculators.html')


def fd(request):
    return render(request, 'tools/tools/calc/fd.html')