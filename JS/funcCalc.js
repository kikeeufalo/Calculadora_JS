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
                let primeiroStr = conta.charAt(conta.length - 1)
                let especial = "+-/,.*%".includes(primeiroStr)
                if (especial) return

                displayResult.textContent = eval(conta)
                console.log(conta)
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
                displayConta.textContent = ''
                displayResult.textContent = '0'
                conta = ''
                return
            break
            case 'Del':
                let c = displayConta.textContent
                displayConta.textContent = c.slice(0, -1)
                conta = conta.slice(0, -1)
                return
            break
            case '+/-':
                displayResult.textContent *= -1
                return
            break
            case ',':
                conta += '.'
                displayConta.textContent += ','
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