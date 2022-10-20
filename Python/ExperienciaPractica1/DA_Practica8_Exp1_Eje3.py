#EXPERIENCIA 1 - Manejo de Colecciones
#1. Elaborar Funciones que reciban tuplas y listas Como parámetros para procesar Datos.
#2. Hacer los cambios de datos respectivos para recoger las estructuras de Datos recibidas y procesarlas.
#3. Agregar Funciones con parámetros por defecto.
#4. Agregar Funciones que devuelvan más de un valor de retorno

def mostrarTupla (tupla):
        print (str(tupla) + ". La tupla no puede ser modificada.")

def ingresarLista():
        lista =[]
        for i in range(0,5):
                num = input ("Ingrese un numero: ")
                lista.append(num)
                i=i+1
        return lista

tupla = (1,3,5,7,9)
lista = ingresarLista()
print (lista)
mostrarTupla (tupla)


 
