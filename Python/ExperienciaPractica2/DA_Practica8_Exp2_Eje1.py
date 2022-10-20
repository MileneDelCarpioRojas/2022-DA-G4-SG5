#notas_examen ={'Ana': 12,'Diana':14,'Sofia':16,'Maria':16,'Liliana':18}
#nota_alumno = notas_examen
#print (nota_alumno['Sofia'])

def ingreso_notas():
    notas_examen = {}
    ingresar = "Si"
    while ingresar == "Si":
        alumno = input('Ingrese el nombre del alumno: ')
        nota = int(input('Ingrese nota del alumno ' + alumno + ': '))
        notas_examen[alumno] = nota
        ingresar = input('¿Ingresar mas notas (Si/No)? ')
    return notas_examen

def notas_por_alumno(notas_examen):
    print('NOTA DEL ALUMNO')
    nombre_alumno = input('Ingrese el nombre del alumno: ')
    print('La nota del examen de ' + nombre_alumno + " es: " + str(notas_examen[nombre_alumno]))

def mostrar_notas(notas_examen):
    print('NOTAS DEL EXAMEN')
    for alumno in notas_examen:
        print(alumno, '\t', notas_examen[alumno])

notas_examen = ingreso_notas()
print (notas_examen)
notas_por_alumno(notas_examen)
mostrar_notas(notas_examen)




