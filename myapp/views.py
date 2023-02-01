from django.http import HttpResponse, JsonResponse
from .models import Formulario
from django.shortcuts import render, redirect
from .forms import createForm

# Create your views here.


def inicio(request):
    return render(request, 'inicio.html')

def estatuto(request):
    return render(request, 'estatuto.html')

def formulario(request):
    if request.method == 'GET':
        # Renderiza la interfaz
        return render(request, 'formulario.html', {
            'form': createForm()
        })
    else:
        # Envia los datos en la base de datos
        Formulario.objects.create(
            nombre_apellido=request.POST['nombre_apellido'],
            fecha_nacimiento=request.POST['fecha_nacimiento'],
            lugar_nacimiento=request.POST['lugar_nacimiento'],
            nacionalidad=request.POST['nacionalidad'],
            cedula_identidad=request.POST['cedula_identidad'],
            numero_beneficiario=request.POST['numero_beneficiario'],
            sexo=request.POST['sexo'],
            nombre_conyuge=request.POST['nombre_conyuge'],
            estado_civil=request.POST['estado_civil'],
            direccion_laboral=request.POST['direccion_laboral'],
            entidad_dependencia=request.POST['entidad_dependencia'],
            profesion_ocupacion=request.POST['profesion_ocupacion'],
            especialidad=request.POST['especialidad'],
            disposicion_legal_jubilacion=request.POST['disposicion_legal_jubilacion'],
            resolucion_numero=request.POST['resolucion_numero'],
            imagen_cedula_frente=request.POST['imagen_cedula_frente'],
            imagen_cedula_atras=request.POST['imagen_cedula_atras']
        )
        return redirect('inicio')

def archivos(request):
    return render(request, 'archivos.html')

