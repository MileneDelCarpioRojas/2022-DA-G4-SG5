
cadena=input("Ingrese una cadena:")
encontrar_palabra=input("ingrese la palabra a buscar:")
reemplazar=input("ingrese la palabra a reemplazar:")

n=cadena.find(encontrar_palabra)

if n!=-1:
   while (n!=-1):
         subcadena = cadena[0:n]
         subcadena = subcadena+reemplazar
         subcadena = subcadena+cadena[n+len(encontrar_palabra):]
         cadena = subcadena 
         n = cadena.find(encontrar_palabra,n+1,len(cadena))


else:
       print("La palabra no existe")
       subcadena = cadena

print ("la cadena es: ",subcadena)
