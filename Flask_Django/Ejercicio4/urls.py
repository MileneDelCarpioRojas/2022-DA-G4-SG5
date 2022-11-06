from django.contrib import admin
from django.urls import path 
from proyecto_1 import views
from .urls import views
from django.conf import settings 
from django.contrib.staticfiles.urls import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.inicio, name ='inicio'),
    path('modificar',views.modificar, name='modificar'), 
    path('inicio/crear',views.crear, name='crear'), 
    path('inicio/editar',views.editar, name='editar'), 
    path('eliminar/<int:id>',views.eliminar, name='eliminar'), #recibir el id que coincide con el valor de view
    path('inicio/editar/<int:id>',views.editar, name='editar'), #editar con el id
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
