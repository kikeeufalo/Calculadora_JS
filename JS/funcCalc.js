const containerNumeros = document.querySelector('.botoesNumeros')
const containerOperadores = document.querySelector('.botoes-operadores')
const operadores = containerOperadores.querySelectorAll('button')
const numeros = containerNumeros.querySelectorAll('button')

let buttonClicadosA = ''


operadores

// parte dos numeros/valores dos botoes
numeros.forEach((num) => {
    num.addEventListener('click', function() {
        
        buttonClicadosA += num.textContent

        console.log(buttonClicadosA)
    })
})