from django.shortcuts import render
from django.http import HttpResponse
import qrcode
from qrcode.image.pure import PymagingImage
import random
import time
from django.conf import settings


def qr_code(request):
    if "GET" == request.method:
        return render(request, 'tools/tools/qr_code.html')
    else:
        data = dict()
        text = request.POST["qr_code_text"]
        data["text"] = text
        if (len(text)) > 512:
            data["error_message"] = "Text length should not be more than 512"
            data["error"] = True
            return render(request, 'tools/tools/qr_code.html', data)

        img = qrcode.make(data, image_factory=PymagingImage)
        random_number = random.randint(100000, 9999999)
        timestr = time.strftime("%Y%m%d%H%M%S")
        file_name = settings.PROJECT_NAME + "_qr_" + str(random_number) + "_" + timestr + ".png"
        data["qr_filename"] = settings.MEDIA_URL + file_name
        data["filename"] = file_name
        f = open(settings.MEDIA_ROOT + file_name, "wb")
        img.save(f, "PNG")
        return render(request, 'tools/tools/qr_code.html', data)
