var tela = window.document.getElementById("textRess");
var n1 = ''; //números clicados
var r = ''; //resultado das operções

function calc(number) {
    if (number == 1) {
        tela.innerText += number
        n1 += '1'
    }else if (number == 2) {
        tela.innerText += number
    }else if (number == 3) {
        tela.innerText += number
    }else if (number == 4) {
        tela.innerText += number
    }else if (number == 5) {
        tela.innerText += number
    }else if (number == 6) {
        tela.innerText += number
    }else if (number == 7) {
        tela.innerText += number
    }else if (number == 8) {
        tela.innerText += number
    }else if (number == 9) {
        tela.innerText += number
    }else if (number == 0) {
        tela.innerText += number
    };
};

function caracter(c) {// c == caractere
    if (tela.innerText) {
        if (c == '+') {
            tela.innerText += c
            r = n1
        }else if(c == '-') {
            tela.innerText += c
        };
    };
};

function result() {
    tela.innerText = r
    r = ''
};

function calculo() {
    r = n1 + n1
};