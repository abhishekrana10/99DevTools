from . import views
from django.urls import path


app_name = "tools"
urlpatterns = [
    path(r'', views.index, name='index'),
    path(r'md5-hash-generator', views.md5, name='md5'),
    path(r'json-beautifier-validator-pretty-print', views.json_validator, name='json_validator'),
    path(r'credit-card-validator-generator', views.credit_card_validator, name='credit_card_validator'),
    path(r'number-system-conversion', views.number_system_conversion, name='number_system_conversion'),
    path(r'base64-encode-decode', views.base64, name='base64'),
    path(r'quick-notepad', views.quick_notepad, name='quick_notepad'),
    path(r'json-to-xml-converter', views.jsontoxml, name='jsontoxml'),
    path(r'qr-code-generator', views.qr_code, name='qr_code'),
    path(r'my-public-ip-address', views.public_ip, name='public_ip'),
    path(r'xml-to-json-converter', views.xmltojson, name='xmltojson'),
    path(r'string-functions', views.string_functions, name='string_functions'),
    path(r'public-ip-api', views.public_ip_api, name='public_ip_api'),
    path(r'epoch-time-converter', views.epoch_converter, name='epoch_converter'),
    path(r'url-encoder-decoder', views.url_encode, name='url_encode'),
    path(r'password-generator', views.password_generator, name='password_generator'),

]


urlpatterns += [
    path(r'calculators', views.calculators, name='calculators'),
    path(r'calculators/fd', views.fd, name='fd'),
]

# other urls
urlpatterns += [
    path(r'team', views.team, name='team')

]
