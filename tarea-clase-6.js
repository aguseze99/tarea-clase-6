/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
document.querySelector('#siguiente').onclick = function(e){
    const cantidadIntegrantesLlamada = document.querySelector('#cantidad-integrantes')

    const cantidadIntegrantes = Number(cantidadIntegrantesLlamada.value)

    borrarIntegrantes();
    for(let i = 0; i< cantidadIntegrantes; i++){
        crearIntegrante()
    }
    mostrarBotonCalculo()
    
    e.preventDefault();
}

document.querySelector('#calcular').onclick = function(e){
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', obtenerNumeroMayor(numeros))
    mostrarEdad('menor', obtenerNumeroMenor(numeros))
    mostrarEdad('promedio', obtenerPromedio(numeros))
    mostrarResultados()
    e.preventDefault()
}
document.querySelector('#resetear').onclick = resetear

function crearIntegrante(){
    const div = document.createElement('div')
    div.className = 'integrante';
    const input = document.createElement('input')
    input.type = 'number'
    input.placeholder = 'Ingrese la edad de los los integrantes'

    div.appendChild(input);

    const integrantes = document.querySelector('#integrantes')
    integrantes.appendChild(div)

}

function borrarIntegrantes(){
    const integrantes = document.querySelectorAll('.integrante');
    for(let i = 0; i < integrantes.length; i++){
        integrantes[i].remove()
    }
}

function resetear(){
    borrarIntegrantes();
    ocultarBotonCalculo();
    ocultarResultados();
}

function ocultarBotonCalculo(){
    document.querySelector('#calcular').className = 'oculto'
}

function mostrarBotonCalculo(){
    document.querySelector('#calcular').className = '';
}

function ocultarResultados(){
    document.querySelector('#analisis-edades').className = 'oculto';
}
function mostrarResultados(){
    document.querySelector('#analisis-edades').className = '';
}

function mostrarEdad(tipo, valor){
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes(){
    const integrantes = document.querySelectorAll('.integrante input');
    const edades = []
    for(let i = 0; i < integrantes.length; i++){
        edades.push(Number(integrantes[i].value))
    }
    return edades;
}

function obtenerNumeroMayor(numeros){
    let numeroMayor = numeros[0];
    for(let i = 1; i < numeros.length; i++){
        if (numeros[i] > numeroMayor){
            numeroMayor = numeros[i]
        } 
    }
    return numeroMayor
}

function obtenerNumeroMenor(numeros){
    let numeroMenor = numeros[0]
    for(let i = 1; i < numeros.length; i++){
        if(numeros[i]< numeroMenor){
            numeroMenor = numeros[i]
        }
    }
    return numeroMenor;
}

function obtenerPromedio(numeros){
    let acumulador = 0 
    for (let i = 0; i < numeros.length; i++){
        acumulador += numeros[i]
    }
    return(acumulador/numeros.length).toFixed(2)
}