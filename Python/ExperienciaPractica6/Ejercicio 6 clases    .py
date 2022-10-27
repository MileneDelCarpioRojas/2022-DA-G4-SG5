# en este ejercicio creamos una clase llamada celulares y
# creamos dos objetos de esa clase 
class celulares:
      def __init__(self,color,camaras):
         self.color =color
         self.camaras = camaras

redmin_note_8 = celulares ('azul',2)
samsung_a21 = celulares('rojo',4)

print ("El color del celular redmin note 8 es: ", (redmin_note_8.color))
print ("y sus camaras son: ",(redmin_note_8.camaras))
print("\n")
print ("El color del celular samsung A21 es: ")
print(samsung_a21.color)
print("el numero de camaras que tienen son:")
print(samsung_a21.camaras)