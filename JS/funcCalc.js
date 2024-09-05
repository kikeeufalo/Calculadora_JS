var tela = window.document.getElementById("textRess")
var operadorUsado = '' // verifica qual operador esta sendo usado
var num1 = '' // primeiro digito da operação
var num2 = '' //segundo digito da operação
var verificador = true //verifica se pode colocar o número
var opQuantia = true //verifica se pode colocar um operador ou mais

function numeros(n) { //função dos numeros
    if (n == 1) { //verifica o número passado por parâmetro
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }else if (n == 2) {
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }else if (n == 3) {
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }else if (n == 4) {
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }else if (n == 5) {
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }else if (n == 6) {
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }else if (n == 7) {
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }else if (n == 8) {
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }else if (n == 9) {
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }else if (n == 0) {
        if (verificador == true) {
            if (num1 == '') {
                tela.innerText = ''
            }
            tela.innerText += n
            num1 += n
        }else if (verificador == false) {
            tela.innerText += n
            num2 += n
        }
    }
}

function operadores(o) { //operadores
    if (opQuantia == true) {
        if (o == '+' && num1 != '') {
            tela.innerText += ' + '
            operadorUsado = o
        }else if (o == '-' && num1 != '') {
            tela.innerText += ' - '  
            operadorUsado = '-'
        }else if (o == 'x' && num1 != '') {
            tela.innerText += ' x '
            operadorUsado = 'x'
        }else if (o == '/' && num1 != '') {
            tela.innerText += ' / '
            operadorUsado = '/'
        }else if (o == 'x2' && num1 != '') {
            tela.innerText += '²'
            operadorUsado = 'x2'
        }else if (o == '%' && num1 != '') {
            tela.innerText += '%'
            operadorUsado = '%'
        }
    }
    opQuantia = false
    verificador = false

    if (o == '+/-') {
        if (num1 != '') {
            if (Number(num1) > 0) {
                var neg = num1 * -1
                tela.innerText = neg
                num1 = neg
            }else if (Number(num1) < 0) {
                var pos = num1 * -1
                tela.innerText = pos
                num1 = pos
            }
        }
        operadorUsado = '+/-'
        opQuantia = true
    }
}

function operacaoResultado() { //resultado das operções
    if (operadorUsado == '+') {
        var soma = Number(num1) + Number(num2)
        tela.innerText = soma
    }else if (operadorUsado == '-') {
        var subtracao = Number(num1) - Number(num2)
        tela.innerText = subtracao
    }else if (operadorUsado == 'x') {
        var multiplicacao = Number(num1) * Number(num2)
        tela.innerText = multiplicacao
    }else if (operadorUsado == '/') {
        var divisao = Number(num1) / Number(num2)
        tela.innerText = divisao
    }else if (operadorUsado == 'x2') {
        var numeroAoQuadrado = Number(num1) * Number(num1)
        tela.innerText = numeroAoQuadrado
    }else if (operadorUsado == '%') {
        var porcentagem = Number(num1) / 100
        tela.innerText = porcentagem
    }
    opQuantia = true
    verificador = true
    operadorUsado = ''
    num1 = ''
    num2 = ''
}

function reset() {
    tela.innerText = ''
    num1 = ''
    num2 = ''
    verificador = true
    opQuantia = true
}