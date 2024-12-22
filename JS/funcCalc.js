const containerNumeros = document.querySelector('.botoesNumeros')
const containerOperadores = document.querySelector('.botoes-operadores')
const operadores = containerOperadores.querySelectorAll('button')
const numeros = containerNumeros.querySelectorAll('button')
const displayConta = document.querySelector('#numerosConta')
const displayResult = document.querySelector('#resposta')

let buttonClicadoA = ''
let buttonClicadoB = ''
let calculo = ''
let r = 0

let ordem = true

// limites de caracteres
function limiteCaracteres(limite) {
    let caracteres = displayConta.textContent
    return caracteres.length >= limite
}

// parte dos operadores
operadores.forEach((oper) => {
    oper.addEventListener('click', function () {

        
    })
})

// parte dos numeros/valores dos botoes
numeros.forEach((num) => {
    num.addEventListener('click', function () {
        if (limiteCaracteres(20)) return

        if (ordem) {
            buttonClicadoA += num.textContent
            displayConta.textContent += num.textContent
        } else {
            buttonClicadoB += num.textContent
            displayConta.textContent += num.textContent

        }

    })
})