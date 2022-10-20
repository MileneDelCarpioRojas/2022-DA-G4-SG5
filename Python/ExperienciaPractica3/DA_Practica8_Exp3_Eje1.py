# CREAR UN ARCHIVO TIPO TEXTO
archivo1=open("archivo_ejemplo.txt","w") 
archivo1.close()
print "Nombre del archivo: ",archivo1.name 
print "Cerrado o no: ",archivo1.closed 
print "Modo del apertura: ",archivo1.mode
archivo1.close()

#CREAR UN ARCHIVO TIPO BINARIO
archivo2=open("archivo_ejemplo_2.txt","wb") 
archivo2.close()
print "Nombre del archivo: ",archivo2.name 
print "Cerrado o no: ",archivo2.closed 
print "Modo del apertura: ",archivo2.mode
archivo2.close()


#CREAR UN ARCHIVO PARA ESCRITURA
archivo2=open("archivo_ejemplo_2.txt","w")
archivo2.write('Archivo 2:')
archivo2.write('Este archivo fue abiero para escritura')
print "Nombre del archivo: ",archivo2.name 
print "Cerrado o no: ",archivo2.closed 
print "Modo del apertura: ",archivo2.mode
archivo2.close()
