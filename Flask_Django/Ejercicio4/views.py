from urllib.request import Request
from django.shortcuts import redirect, render
from .models import Partner 
from .forms import PartnerForm 
def inicio(request):
    return render(request,'inicio.html')

def modificar(request):
    partner = Partner.objects.all() 
    return render(request,'inicio.html',{'modificar':partner})

def crear(request):
    formulario = PartnerForm(request.POST or None,request.FILES or None)
    if formulario.is_valid(): 
        formulario.save() #guarda
        return redirect('modificar') 
    return render(request,'crear.html',{'formulario':formulario})

def editar(request,id):
    partner = Partner.objects.get(id=id)
    formulario = PartnerForm(request.POST or None,request.FILES or None, instance=partner)
    if formulario.is_valid() and request.POST: #si es valido
        formulario.save() #guarda
        return redirect('modificar') 
    return render(request,'editar.html',{'formulario':formulario})

def eliminar(request,id):
    partner = Partner.objects.get(id=id)
    partner.delete()
    return redirect(request,'inicio')