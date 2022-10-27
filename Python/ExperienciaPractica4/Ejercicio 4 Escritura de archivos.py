# aqui abrimos un archivo de texto en modo w, escritura
# el nombre del archivo se llama holamundo.txt
# luego escribimos una linea en el archivo
# finalmente cerramos el archivo

print('inicio de ejercicio 4\n')
print('====== == ========= =\n')
print('Un archivo se esta grabando con algunas lineas de texto\n')
f = open ('holamundo.txt','w')
f.write('hola compañeros de la programación\n')
f.write('esta es otra linea\n')
f.write('y aqui va una tercera linea de texto ')
f.close()

print('fin de ejercicio 4\n')