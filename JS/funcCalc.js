const containerNumeros = document.querySelector('.botoesNumeros')
const containerOperadores = document.querySelector('.botoes-operadores')
const operadores = containerOperadores.querySelectorAll('button')
const numeros = containerNumeros.querySelectorAll('button')
const displayConta = document.querySelector('#numerosConta')
const displayResult = document.querySelector('#resposta')

let conta = ''

// limites de caracteres
function limiteCaracteres(limite) {
    let caracteres = displayConta.textContent
    return caracteres.length >= limite
}

// parte dos operadores
operadores.forEach((oper) => {
    oper.addEventListener('click', function () {
        switch (oper.textContent) {
            case '=':
                displayResult.textContent = eval(conta)
                return
            break
            case 'x':
                conta += '*'
                displayConta.textContent += 'x'
                return
            break
            case '%':
                displayResult.textContent = eval(conta) / 100
                displayConta.textContent += '%'
                return
            break
            case 'C':
                
                return
            break
            case 'Del':
                return
            break
            case '+/-':
                return
            break
        }
        displayConta.textContent += oper.textContent
        conta += oper.textContent
    })
})

// parte dos numeros/valores dos botoes
numeros.forEach((num) => {
    num.addEventListener('click', function () {
        if (limiteCaracteres(20)) return
        displayConta.textContent += num.textContent
        conta += num.textContent
    })
})