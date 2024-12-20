const containerNumeros = document.querySelector('.botoesNumeros')
const containerOperadores = document.querySelector('.botoes-operadores')
const operadores = containerOperadores.querySelectorAll('button')
const numeros = containerNumeros.querySelectorAll('button')

let buttonClicadoA = ''
let buttonClicadoB = ''
let calculo = ''
let r = 0

let ordem = true

// parte dos operadores
operadores.forEach((oper) => {
    oper.addEventListener('click', function () {

        if (oper.textContent == ',') {
            buttonClicadoA += ','
        }
        if (oper.textContent == 'Del') {
            
        }
        if (oper.textContent == '%') {
            
        }


        ordem = false

        switch (oper.textContent) {
            case '+':
                calculo += '+'
                break
            case '-':
                calculo += '-'
                break
            case 'x':
                calculo += '*'
                break
            case '/':
                calculo += '/'
                break
            case 'Del':
                // O del irá apagar o button que está sendo escrito ou ambos, apenas mantendo a resposta?
                if (buttonClicadoA) {
                    this.textContent = ''
                } else {
                    buttonClicadoB.textContent = ''
                }
                break
            case 'C':
                buttonClicadoA = ""
                buttonClicadoB = ""
                calculo = ""
                r = ""

                ordem = true
                break
            case '=':
                if (calculo != "") {
                    r = eval(`${parseFloat(buttonClicadoA)} ${calculo} ${parseFloat(buttonClicadoB)}`)
                    buttonClicadoA = ""
                    buttonClicadoB = ""
                    calculo = ""
                }
                
                console.log(r)
                
                ordem = true
                
                break
        }

        console.log(oper.textContent)
    })
})

// parte dos numeros/valores dos botoes
numeros.forEach((num) => {
    num.addEventListener('click', function () {

        if (ordem) {
            buttonClicadoA += num.textContent
            console.log('a', buttonClicadoA)
        } else {
            buttonClicadoB += num.textContent
            console.log('b', buttonClicadoB)
        }

    })
})