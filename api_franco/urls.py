from django.urls import path
from .views import *

app_name = 'api'

urlpatterns = [
    path(f'{app_name}/proyecto/', Proyecto_APIView.as_view()),
    path(f'{app_name}/campo/', Campo_APIView.as_view()),
    path(f'{app_name}/habilidad/', Habilidad_APIView.as_view()),
    path(f'{app_name}/habilidad/<str:campo>/', Habilidad_APIView_Detail.as_view()),
    path(f'{app_name}/proyecto/<int:pk>/', Proyecto_APIView_Detail.as_view()),   
    path(f'{app_name}/get-csrf-token/', get_csrf_token),   
]