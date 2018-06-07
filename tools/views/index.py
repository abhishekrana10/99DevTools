from django.shortcuts import render
import json, xmltodict
from django.http import JsonResponse


def index(request):
    if request.method == "GET":
        return render(request, 'tools/tools/index.html')


def md5(request):
    if request.method == "GET":
        return render(request, 'tools/tools/md5.html')


def credit_card_validator(request):
    if request.method == "GET":
        return render(request, 'tools/tools/c_card_validate.html')


def number_system_conversion(request):
    if request.method == "GET":
        return render(request, 'tools/tools/decimal_to_other.html')


def json_validator(request):
    if "GET" == request.method:
        return render(request, 'tools/tools/json_beautify.html')


def base64(request):
    if "GET" == request.method:
        return render(request, 'tools/tools/base64.html')


def quick_notepad(request):
    return render(request, 'tools/tools/quick_notepad.html')


def jsontoxml(request):
    data = dict()
    if "GET" == request.method:
        data["element"] = "element"
        data["rootelement"] = "root"
        return render(request, 'tools/tools/jsontoxml.html',data)
    else:
        post_data = request.POST.copy()
        #json_obj = post_data["jsonstring"]
        jsoninput = post_data["jsonstring"]
        global root_tag_element
        root_tag_element = post_data["temp_root"]
        global array_tag_element
        array_tag_element = post_data["temp_tag"]
        data["post"] = True
        data["element"] = request.POST["temp_tag"]
        data["rootelement"] = post_data["temp_root"]
        try:
            modified_json = dict()
            modified_json[post_data["temp_root"]] = json.loads(jsoninput)
            xml_data = json2xml(modified_json)
            data["xmloutput"] = xml_data
            data["jsonstring"] = jsoninput
            return render(request, 'tools/tools/jsontoxml.html', data)
        except Exception as e:
            data["error"] = True
            data["error_msg"] = e
            data["jsonstring"] = jsoninput
            print(e)
            return render(request, 'tools/tools/jsontoxml.html', data)


def public_ip(request):
    data = dict()
    data["ip"] = get_ip_address(request)
    return render(request, 'tools/tools/public_ip.html', data)


def public_ip_api(request):
    ip = get_ip_address(request)
    return JsonResponse({"ip": ip})


def get_ip_address(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def json2xml(json_obj,  Line_spacing=""):
    result_list = list()

    json_obj_type = type(json_obj)

    if json_obj_type is list:
        for sub_elem in json_obj:
            result_list.append("%s<%s>" % (Line_spacing, array_tag_element))
            result_list.append(json2xml(sub_elem, "    "+Line_spacing))
            result_list.append("%s</%s>" % (Line_spacing, array_tag_element))
        return "\n".join(result_list)

    elif json_obj_type is dict:
        for tag_name in json_obj:
            sub_obj = json_obj[tag_name]
            result_list.append("%s<%s>" % (Line_spacing, tag_name))
            result_list.append(json2xml(sub_obj, "    " + Line_spacing))
            result_list.append("%s</%s>" % (Line_spacing, tag_name))
        return "\n".join(result_list)

    return "%s%s" % (Line_spacing, json_obj)


def xmltojson(request):
    if "GET" == request.method:
        return render(request, 'tools/tools/xmltojson.html')
    else:
        xml_post_data = request.POST.copy()
        data = dict()
        data["post"] = True
        data["xmlinput"] = xml_post_data["xmlarea"]
        try:
            parsed_data = xmltodict.parse(xml_post_data["xmlarea"])
            data["jsonoutput"] = json.dumps(parsed_data)
            return render(request, 'tools/tools/xmltojson.html', data)
        except Exception as e:
            data["error"] = True
            data["error_msg"] = e
            return render(request, 'tools/tools/xmltojson.html', data)


def string_functions(request):
    if "GET" == request.method:
        return render(request, 'tools/tools/string_functions.html')




def epoch_converter(request):
    if "GET" == request.method:
        return render(request, 'tools/tools/epoch_converter.html')


def url_encode(request):
    if "GET" == request.method:
        return render(request, 'tools/tools/url_encode.html')
