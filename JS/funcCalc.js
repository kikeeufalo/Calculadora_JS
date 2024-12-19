let containerNumeros = document.querySelector('.botoesNumeros')
let numeros = containerNumeros.querySelectorAll('button')

numeros.forEach((num) => {
    num.addEventListener('click', function() {
        console.log(num.textContent)
    })
})