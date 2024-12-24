const containerNumeros = document.querySelector('.botoesNumeros')
const containerOperadores = document.querySelector('.botoes-operadores')
const operadores = containerOperadores.querySelectorAll('button')
const numeros = containerNumeros.querySelectorAll('button')
const displayConta = document.querySelector('#numerosConta')
const displayResult = document.querySelector('#resposta')

let conta = ''
let zeraConta = false
let contaAuto = false

// limites de caracteres
function limiteCaracteres(limite) {
    let caracteres = displayConta.textContent
    return caracteres.length >= limite
}

// parte dos operadores
operadores.forEach((oper) => {
    oper.addEventListener('click', function () {
        if (contaAuto) {
            displayConta.textContent = eval(conta)
            displayResult.textContent = eval(conta)
            zeraConta = false
        }

        contaAuto = true
        
        switch (oper.textContent) {
            case '=':
                let primeiroStr = conta.charAt(conta.length - 1)
                let especial = "+-/,.*%".includes(primeiroStr)
                if (limiteCaracteres(8)) return
                if (especial) return
                displayResult.textContent = eval(conta)
                conta = ''
                contaAuto = false
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
                conta = ''
                contaAuto = false
                return
                break
            case 'C':
                displayConta.textContent = ''
                displayResult.textContent = '0'
                conta = ''
                contaAuto = false
                return
                break
            case 'Del':
                let c = displayConta.textContent
                displayConta.textContent = c.slice(0, -1)
                conta = conta.slice(0, -1)
                contaAuto = false
                return
                break
            case '+/-':
                displayResult.textContent *= -1
                contaAuto = false
                return
                break
            case ',':
                conta += '.'
                displayConta.textContent += ','
                contaAuto = false
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
        if (zeraConta) {
            conta = ''
            displayConta.textContent = ''
            displayResult.textContent = '0'
            zeraConta = false
        }
        displayConta.textContent += num.textContent
        conta += num.textContent
    })
})