from django.shortcuts import render


def team(request):
    return render(request, 'tools/others/team.html')