#EXPERIENCIA 1 - Condicionales
n1 = input("Ingrese el N1: ")
n2 = input("Ingrese el N2: ")
n3 = input("Ingrese el N3: ")
n4 = input("Ingrese el N4: ")
n5 = input("Ingrese el N5: ")
n6 = input("Ingrese el N6: ")


mayor = 0
suma = n1 + n2 + n3 + n4 + n5 + n6
prom = suma/6
ncprom = 0
#---Numero Mayor
if n1==n2==n3==n4==n5:
    print ("Los numeros son iguales")
if (n1>n2 and n1>n3 and n1>n4 and n1>n5 and n1>n6):
    mayor = n1
elif (n2>n3 and n2>n4 and n2>n5 and n2>n6):
    mayor = n2
elif (n3>n4 and n3>n5 and n3>n6):
    mayor = n3
elif (n4>n5 and n4>n6):
    mayor = n4
elif (n5>n6):
    mayor = n5
else:
    mayor = n6


#---Numero mas Cercano al Medio
p1 = abs (n1 - prom)
p2 = abs (n2 - prom)
p3 = abs (n3 - prom)
p4 = abs (n4 - prom)
p5 = abs (n5 - prom)
p6 = abs (n6 - prom)

#print p1,p2,p3,p4,p5,p6

if (p1<p2 and p1<p3 and p1<p4 and p1<p5 and p1<p6):
    ncprom = n1
elif (p2<p3 and p2<p4 and p2<p5 and p2<p6):
    ncprom = n2
elif (p3<p4 and p3<p5 and p3<p6):
    ncprom = n3
elif (p4<p5 and p4<p6):
    ncprom = n4
elif (p5<p6):
    ncprom = n5
else:
    ncprom = n6
    
print ("Mayor: "), mayor
print ("Punto medio o promedio:"),prom
print ("Numero mas cercano al punto medio: "), ncprom


    

