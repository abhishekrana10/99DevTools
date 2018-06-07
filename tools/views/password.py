from django.shortcuts import render
from django.http import HttpResponse
import random
import time


def password_generator(request):
    return render(request, 'tools/tools/password_generator.html')