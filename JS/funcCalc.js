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

// parte dos operadores
operadores.forEach((oper) => {
    oper.addEventListener('click', function () {

        if (oper.textContent == ',') {

        }
        if (oper.textContent == 'Del') {

        }
        if (oper.textContent == '%') {
            r = eval(`${parseFloat(buttonClicadoA)} ${calculo} ${parseFloat(buttonClicadoB)}`) / 100
            console.log(r)
        }


        ordem = false

        switch (oper.textContent) {
            case '+/-':
                r *= -1
                // atualizar no display
                break
            case '+':
                calculo += '+'
                displayConta.textContent += oper.textContent

                break
            case '-':
                calculo += '-'
                displayConta.textContent += oper.textContent

                break
            case 'x':
                calculo += '*'
                displayConta.textContent += oper.textContent

                break
            case '/':
                calculo += '/'
                displayConta.textContent += oper.textContent

                break
            case 'C':
                buttonClicadoA = ""
                buttonClicadoB = ""
                calculo = ""
                r = 0

                console.log(r)
                ordem = true
                break
            case '=':
                if (buttonClicadoB == '' || buttonClicadoA == '') return

                if (calculo != "") {
                    r = eval(`${parseFloat(buttonClicadoA)} ${calculo} ${parseFloat(buttonClicadoB)}`)

                    console.log(`${buttonClicadoA} ${calculo} ${buttonClicadoB} = ${r}`)

                    buttonClicadoA = ""
                    buttonClicadoB = ""
                    calculo = ""
                }

                ordem = true
                break
        }
    })
})

// parte dos numeros/valores dos botoes
numeros.forEach((num) => {
    num.addEventListener('click', function () {

        if (ordem) {
            buttonClicadoA += num.textContent
            displayConta.textContent += num.textContent
        } else {
            buttonClicadoB += num.textContent
            displayConta.textContent += num.textContent
        }

    })
})