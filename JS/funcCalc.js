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
            case 'C':
                buttonClicadoA = ""
                buttonClicadoB = ""
                calculo = ""
                r = 0

                console.log(r)
                ordem = true
                break
            case '=':
                if (buttonClicadoB == '') return

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
        } else {
            buttonClicadoB += num.textContent
        }

    })
})