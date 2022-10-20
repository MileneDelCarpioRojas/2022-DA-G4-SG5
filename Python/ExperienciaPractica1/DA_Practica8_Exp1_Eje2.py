#EXPERIENCIA 1 - Intrucciones Iterativas

def primo(n):
    i = 2
    if n == 1:
        return str(n) + " no es primo. Solo tiene un divisor"
    while (n % i != 0):
        i = i + 1
    if i == n:
        return str(n) + " es primo"
    else:
        return str(n) + " no es primo"

def ingresar_num(cant):
    for num in range(0,cant):
        num = input ("Ingrese un numero: ")
        lista.append(num)

def menu():
    print ("---------- MENU ----------")
    print ("1. Ingresar mas numeros a la lista")
    print ("2. Saber si los numeros son primos o no")
    print ("3. Mostrar la lista")
    print ("4. Salir")
    resp = int (input ("Ingrese el numero de su respuesta: "))
    return resp


lista = []
rpta = 1
while rpta != 4:
    i = 0
    print ("INGRESAR NUMEROS")
    if rpta == 1:
        cant = int(input("Ingrese la cantidad de numeros a ingresar: "))
        ingresar_num(cant)
        
    elif rpta == 2:
        print ("NUMEROS PRIMOS")
        while i<len(lista):
            print (primo(lista[i]))
            i = i + 1
            
    elif rpta == 3:
        print ("LISTA DE NUMEROS")
        print (lista)
        
    else:
        print ("Es opcion no es valida. Ingrese otra.")
        
    rpta = menu()


