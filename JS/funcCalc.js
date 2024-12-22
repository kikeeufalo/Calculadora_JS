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

        if (oper.textContent == ',') {

        }
        if (oper.textContent == '%') {
            r = eval(`${parseFloat(buttonClicadoA)} ${calculo} ${parseFloat(buttonClicadoB)}`) / 100
            console.log(r)
        }


        ordem = false

        switch (oper.textContent) {
            case '+/-':
                r *= -1
                displayResult.textContent = r
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
            case 'Del':
                if (displayConta.length <= 0) return

                let deleteCaractere = displayConta.textContent
                displayConta.textContent = deleteCaractere.slice(0, -1)
                console.log(this.textContent)
            
                break
            case 'C':
                displayConta.textContent = ''
                displayResult.textContent = 0

                buttonClicadoA = ""
                buttonClicadoB = ""
                calculo = ""
                r = 0

                console.log(r)
                ordem = true
                break
            case '=':
                if (limiteCaracteres(8)) return
                if (buttonClicadoB == '' || buttonClicadoA == '' && calculo == '') return

                if (calculo != "") {
                    if (buttonClicadoA == '') {
                        r = eval(`${r} ${calculo} ${buttonClicadoB}`)
                        displayResult.textContent = r
                        buttonClicadoA = ""
                        buttonClicadoB = ""
                        calculo = ""

                        return
                    }

                    r = eval(`${displayConta.textContent}`)

                    displayResult.textContent = r

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