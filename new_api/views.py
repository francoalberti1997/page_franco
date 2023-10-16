from django.http import HttpResponse

def index(request):
    return HttpResponse("Hola A Todos Soy Franco")