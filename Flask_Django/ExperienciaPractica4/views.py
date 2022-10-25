from django.shortcuts import render 

# Create your views here. 


from django.http import HttpResponse 

from django.template import loader 


def index(request): 

    template = loader.get_template('pag.html') 

    return HttpResponse(template.render()) 


def ind(request): 

    mensaje="Solicitud completada %r" %request.GET["name"]," se le enviara un correo de respuesta a %r" %request.GET["mail"] 

    return HttpResponse(mensaje) 
