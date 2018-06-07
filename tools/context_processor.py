from django.conf import settings # import the settings file


def global_data(request):
    # return the value you want as a dictionary. you may add multiple values in there.
    data = dict()
    data["project_name"] = settings.PROJECT_NAME
    data["site_url"] = settings.SITE_URL

    return data

