let letras = ['Alianza','Lima','Toda','La','VIDA']
let objetos = [{CUBO:9*9*9, texto:"BARCOS"},{CUBO:25*25*25, texto:"FARFAN"},{CUBO:179*179*179, texto:"BUSTOS"},{CUBO:7772*7772*7772, texto:"CAMPOS"},{CUBO:6692*6692*6692, texto:"COMANDO SVR"}]
let numeros = [9,25,179,7772,6692];

for (i=0; i<objetos.length; i++){
    console.log("Datos, columna" + i + ":\n Numero:" + numeros[i] + "\n CUBO:" + objetos[i].CUBO + "\n Letra:" + letras[i] + "\n Letra:" + objetos[i].texto)
}
    

let x=0
numeros.forEach(element => {
    console.log("Numero: " + element + " / x: " + x++)
});
x = 0
while (true) {
    if (x == letras.length){
        break
    }
    console.log("x: " + x + " / Texto: " + letras[x]);
    x++;
}

x = 0
do{
    if (x == objetos.length)
    break
    console.log("x: " + x + " / CUBO: " + objetos[x].CUBO + " / texto: " + objetos[x].texto);
    x++;
}while(true)

let inicial = letras[0]
console.log("Valor inicial de arreglo letras: "+inicial)

let final = numeros[numeros.length-1]
console.log("Valor final de arreglo numeros: "+final)

letras.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
})

let nuevaLongitud = letras.push('Paredes')
console.log(letras)

let ultimo = numeros.pop()
console.log(numeros)

let nuevo = letras.unshift('Equipo')
console.log(letras)

let primero =letras.shift()
console.log(letras)

numeros.push('Equipo')
console.log(numeros)

let pos = numeros.indexOf('VIDA')
console.log('VIDA')
