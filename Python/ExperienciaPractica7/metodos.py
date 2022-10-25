#propiedades y metodos 

class Estudiante: 

    curso = "Desarrollo de aplicaciones" 

    mayor_edad= True 

#metodo constructor 

    def __init__(self, nombre, apellido, codigo): 

        self.nombre= nombre 

        self.apellido=apellido 

        self.__codigo=codigo 

    @classmethod 

    def getNombre(self): 

        return self.nombre 

    def getApellido(self): 

        return self.apellido 

    @property 

    def cod(self): 

        return self.__codigo 

    @cod.setter 

    def cod(self,codigo): 

        self.__codigo = codigo 

    def presentarse(self): 

        return 'mi nombre es {} con apellido {} y mi codigo es {}'.format(self.nombre,self.apellido,self.cod) 


#metodo estatico 

    @staticmethod 

    def mayor_edad(): 

        return True 


nombre=input("Ingresar nombre del estudiante: ") 

apellido=input("Ingresar apellido del estudiante: ") 

codigo=input("Ingresar codigo: ") 

estudiante=Estudiante(nombre,apellido,codigo) 

print(estudiante.presentarse()) 
