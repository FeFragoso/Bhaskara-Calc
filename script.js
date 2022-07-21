let valorA = document.getElementById('valor-a')
let valorB = document.getElementById('valor-b')
let valorC = document.getElementById('valor-c')
let btnCalcular = document.getElementById('btnCalcular')

function calcular() {
    let A = valorA.value
    let B = valorB.value
    let C = valorC.value

    let resultadoMaior = (-B + Math.sqrt(B**2-4*A*C))/(2*A)
    let resultadoMenor = (-B - Math.sqrt(B**2-4*A*C))/(2*A)

    alert(resultadoMaior + ' e ' + resultadoMenor)
}