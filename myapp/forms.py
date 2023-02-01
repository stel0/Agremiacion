from django import forms
from .models import Formulario
class DateInput(forms.DateInput):
    input_type = 'date'
class createForm(forms.ModelForm):
    class Meta:
        model = Formulario
        fields = ['nombre_apellido','fecha_nacimiento','lugar_nacimiento','nacionalidad','cedula_identidad','numero_beneficiario','sexo','estado_civil','nombre_conyuge','direccion_laboral','entidad_dependencia','profesion_ocupacion','especialidad','disposicion_legal_jubilacion','resolucion_numero','imagen_cedula_frente','imagen_cedula_atras']
        widgets = {
            'nombre_apellido': forms.TextInput(attrs={'class':'u-full-width formulario__input','placeholder':'Nombre y apellido'}),
            'fecha_nacimiento': DateInput(attrs={'class':'u-full-width formulario__input'}) ,
            'lugar_nacimiento': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'nacionalidad': forms.Select(attrs={'class':'u-full-width formulario__input'}),
            'cedula_identidad': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'numero_beneficiario': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'sexo': forms.Select(attrs={'class':'u-full-width formulario__input'}),
            'estado_civil': forms.Select(attrs={'class':'u-full-width formulario__input'}),
            'nombre_conyuge': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'direccion_laboral': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'entidad_dependencia': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'profesion_ocupacion': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'especialidad': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'disposicion_legal_jubilacion': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'resolucion_numero': forms.TextInput(attrs={'class':'u-full-width formulario__input'}),
            'imagen_cedula_frente':forms.FileInput(attrs={'class':'drop-zone__input formulario__input','onchange':"return imageValidation(document.getElementById('id_imagen_cedula_frente'),'imagen_cedula_frente')"}),
            'imagen_cedula_atras':forms.FileInput(attrs={'class':'drop-zone__input formulario__input','onchange':"return imageValidation(document.getElementById('id_imagen_cedula_atras'),'imagen_cedula_atras')"})
        }