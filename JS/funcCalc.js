const containerNumeros = document.querySelector('.botoesNumeros')
const containerOperadores = document.querySelector('.botoes-operadores')
const operadores = containerOperadores.querySelectorAll('button')
const numeros = containerNumeros.querySelectorAll('button')

let buttonClicadoA = ''
let buttonClicadoB = ''
let calculo = []

let ordem = true

// parte dos operadores
operadores.forEach((oper) => {
    oper.addEventListener('click', function () {
        ordem = false
        
        switch (oper.textContent) {
            case '+':
                console.log('pop')
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
        }else {
            buttonClicadoB += num.textContent
            console.log('b', buttonClicadoB)
        }

    })
})