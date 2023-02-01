from django.db import models

# Create your models here.



class Formulario(models.Model):
    nombre_apellido = models.CharField(max_length=200)
    fecha_nacimiento = models.DateField(null=True)
    lugar_nacimiento = models.CharField(max_length=200)

    PARAGUAYA='Paraguaya'
    nacionalida_lista=[
        (PARAGUAYA,'Paraguaya')
    ]
    nacionalidad = models.CharField(
        max_length=25,
        choices=nacionalida_lista,
        default=PARAGUAYA
        )

    cedula_identidad = models.CharField(max_length=200)
    numero_beneficiario = models.CharField(max_length=200)

    MASCULINO = 'Masculino'
    FEMENINO = 'Femenino'
    sexo_lista = [
        (MASCULINO,'Masculino'),
        (FEMENINO,'Femenino')
    ]
    sexo = models.CharField(
        max_length=50,
        choices=sexo_lista,
        default=MASCULINO)

    SOLTERO = 'Soltero/a'
    CASADO = 'Casado/a'
    VIUDO = 'Viudo/a'
    DIVORCIADO = 'Divorciado/a'
    estado_civil_lista = [
        (SOLTERO, 'Soltero/a'),
        (CASADO,'Casado/a'),
        (DIVORCIADO, 'Divorciado/a'),
        (VIUDO,'Viudo/a')
    ]
    estado_civil = models.CharField(
        max_length=50,
        choices=estado_civil_lista,
        default=SOLTERO
    )
    nombre_conyuge = models.CharField(max_length=200)
    direccion_laboral = models.CharField(max_length=200)
    entidad_dependencia = models.CharField(max_length=200)
    profesion_ocupacion = models.CharField(max_length=200)
    especialidad = models.CharField(max_length=200)
    disposicion_legal_jubilacion =models.CharField(max_length=200)
    resolucion_numero = models.CharField(max_length=200)
    imagen_cedula_frente = models.ImageField(upload_to='files/cedulas')
    imagen_cedula_atras = models.ImageField(upload_to='files/cedulas')

    def __str__(self):
        return self.nombre_apellido + ' - ' + self.cedula_identidad

    
