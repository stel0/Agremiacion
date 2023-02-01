from django.urls import path
from . import views

urlpatterns = [
    path('',views.inicio, name="inicio"),
    path('estatuto/',views.estatuto, name="estatuto"),
    path('formulario/',views.formulario, name="formulario"),
    path('archivos/',views.archivos, name='archivos')
]
