const containerNumeros = document.querySelector('.botoesNumeros')
const containerOperadores = document.querySelector('.botoes-operadores')
const operadores = containerOperadores.querySelectorAll('button')
const numeros = containerNumeros.querySelectorAll('button')

let buttonClicadosA = ''




// parte dos numeros/valores dos botoes
numeros.forEach((num) => {
    num.addEventListener('click', function() {
        
        botoesClicados += num.textContent

        console.log(botoesClicados)
    })
})