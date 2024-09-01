var tela = window.document.getElementById("textRess");
var num1 = ''; // primeiro digito da operação
var num2 = ''; //segundo digito da operação
var verificador = true; //verifica se pode colocar o sinal do operador
var opQuantia = true; //verificador para nao colocar mais de um operador

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
    };
};

function operadores(o) { //operadores
    if (opQuantia == true) {
        if (o == '+' && num1 != '') {
            tela.innerText += '+'
        };
    }
    opQuantia = false
    verificador = false
};

function operacaoResultado() { //resultado das operções
    var soma = Number(num1) + Number(num2)
    tela.innerText = soma
    opQuantia = true
    verificador = true
    num1 = ''
    num2 = ''
};

function reset() {
    tela.innerText = ''
    num1 = ''
    num2 = ''
    verificador = true
    opQuantia = true
};