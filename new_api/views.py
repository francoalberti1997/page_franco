from django.shortcuts import render
from django.middleware.csrf import get_token
import requests
from django.views.decorators.csrf import csrf_protect
from django.http import JsonResponse
import requests


def index(request):
    url = "https://codealberti1997.pythonanywhere.com/api/proyecto/"

    if request.method == "POST":
    # Crear un diccionario a partir de request.POST
        data_dict = {key: value for key, value in request.POST.items()}
    
    # Eliminar las claves 'csrfmiddlewaretoken' y 'terms' si están presentes
        for key in ['csrfmiddlewaretoken', 'terms']:
            if key in data_dict:
                del data_dict[key]

        # Realizar la solicitud POST
        response = requests.post(url, data=data_dict)

        # # Verificar si la solicitud se realizó con éxito
        if response.status_code == 201:  # 201 significa Created (creado)
            print('Solicitud POST exitosa. La película se creó correctamente.')
        else:
            print(f'Error en la solicitud POST. Código de estado: {response.status_code}')
            print('Contenido de la respuesta:', response.text)    

    return render(request, "index.html")

