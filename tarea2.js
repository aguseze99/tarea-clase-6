// Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
// Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

// Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
// */

  
function agregarInput(){
    const inputs = document.querySelector('#inputs-contenedor')
    const nuevoContenedorInput = document.createElement('div')
    const nuevoLabel = document.createElement('label')
    const nuevoInput = document.createElement('input')
    
    nuevoLabel.textContent = 'Salario anual'
    nuevoInput.type = 'number'

    nuevoContenedorInput.appendChild(nuevoLabel)
    nuevoContenedorInput.appendChild(nuevoInput)
    inputs.appendChild(nuevoContenedorInput)
} 

function quitarInput(){
    const inputs = document.querySelector('inputs-contenedor')
    if(inputs.children.length>1){
        inputs.lastElementChild.remove();
    }
}

function calcular(){
    const inputs = document.querySelectorAll('#inputs-contenedor input')
    const salarios = []
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value !==''){
            salarios.push(parseInt(inputs[i].value))
        }
    }
    if (salarios.length > 0){
        const salarioMax = Math.max(...salarios)
        const salarioMin = Math.min(...salarios)
        const salarioPromedioAnual = salarios.reduce((a,b) => a + b, 0) / salarios.length;
        const salarioPromedioMensual = salarioPromedioAnual / 12;

        const resultadosDiv = document.querySelector('#resultados')
        resultadosDiv.innerHTML = `<p>Mayor salario anual: ${salarioMax}</p>
         <p>Menor salario anual: ${salarioMin}</p>
         <p>Salario anual promedio: ${salarioPromedioAnual.toFixed(2)}</p> 
         <p>Salario mensual promedio: ${salarioPromedioMensual.toFixed(2)}</p>`
    }
}