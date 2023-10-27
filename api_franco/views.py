from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProyectoSerializers, CampoSerializers, HabilidadSerializers
from .models import Proyecto, Campo, Habilidad
from rest_framework import status
from django.http import Http404
from django.middleware.csrf import get_token
from django.http import JsonResponse

def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrfToken': token})

class Proyecto_APIView(APIView):
    def get(self, request, format=None, *args, **kwargs):
        post = Proyecto.objects.all()
        serializer = ProyectoSerializers(post, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = ProyectoSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class Proyecto_APIView_Detail(APIView):
    def get_object(self, pk):
        try:
            return Proyecto.objects.get(pk=pk)
        except Proyecto.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = ProyectoSerializers(post)  
        return Response(serializer.data)
    def put(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = ProyectoSerializers(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, format=None):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class Campo_APIView(APIView):
    def get(self, request, format=None, *args, **kwargs):
        post = Campo.objects.all()
        serializer = CampoSerializers(post, many=True)

        print("**")
        print(serializer.data)
        print("**")

        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = CampoSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Habilidad_APIView(APIView):
    def get(self, request, format=None, *args, **kwargs):
        post = Habilidad.objects.all()
        serializer = HabilidadSerializers(post, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = HabilidadSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class Habilidad_APIView_Detail(APIView):
    def get_object(self, campo):
        try:
            return Habilidad.objects.filter(campo__nombre=campo).first()
        except Habilidad.DoesNotExist:
            raise Http404
    def get(self, request, campo, format=None):
        habilidades = Habilidad.objects.filter(campo__nombre=campo)
        serializer = HabilidadSerializers(habilidades, many=True)
        return Response(serializer.data)
    
    # def put(self, request, campo, format=None):
    #     post = self.get_object(campo)
    #     serializer = HabilidadSerializers(post, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=400)
    
    # def delete(self, request, campo, format=None):
    #     post = self.get_object(campo)
    #     post.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    


# class Proyecto_APIView_Detail(APIView):
#     def get_object(self, pk):
#         try:
#             return Proyecto.objects.get(pk=pk)
#         except Proyecto.DoesNotExist:
#             raise Http404
#     def get(self, request, pk, format=None):
#         post = self.get_object(pk)
#         serializer = ProyectoSerializers(post)  
#         return Response(serializer.data)
#     def put(self, request, pk, format=None):
#         post = self.get_object(pk)
#         serializer = ProyectoSerializers(post, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     def delete(self, request, pk, format=None):
#         post = self.get_object(pk)
#         post.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)