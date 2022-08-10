let valorA = document.getElementById('valor-a')
let valorB = document.getElementById('valor-b')
let valorC = document.getElementById('valor-c')
let btnCalcular = document.getElementById('btnCalcular')

function calcular() {
    let A = valorA.value
    let B = valorB.value
    let C = valorC.value

    if (A == 0) {
        C = C*-1

        alert("Como o valor de 'A' foi 0, a função foi de 1º grau.\nValor de X: " + C/B)
    }
    else {

        let delta = B**2-4*A*C

        if (delta < 0) {

            alert("O resultado não pode ser encontrado, pois o valor de ∆ é uma raiz negativa.")
        }
        else {

            let resultadoMaior = (-B + Math.sqrt(delta))/(2*A)
            let resultadoMenor = (-B - Math.sqrt(delta))/(2*A)
        
            alert(resultadoMaior + ' e ' + resultadoMenor)
        }
    }
}