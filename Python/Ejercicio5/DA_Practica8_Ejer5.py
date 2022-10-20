# -*- coding: cp1252 -*-
#Escriba un programa de Python que lea un archivo y compruebe si la palabra existe en un archivo de texto o no
archivo3=open("archivo_ejemplo_3.txt","wb") 
archivo3.close()
print "Nombre del archivo: ",archivo3.name 
print "Cerrado o no: ",archivo3.closed 
print "Modo del apertura: ",archivo3.mode
archivo3.close()

archivo3=open("archivo_ejemplo_3.txt","w")
archivo3.write('Archivo 3: ' )
archivo3.write('Escribir y Leer este archivo en Python.')
archivo3.close()

archivo3=open("archivo_ejemplo_3.txt","r")
leer = archivo3.readlines()
print leer
p = str(leer)
#print p.count('archivo')
if (p.count('archivo') == 0):
    print "No Existe esa palabra en el archivo"
else:
    print "Esa palabra está en el archivo."

    

