let display = null;
let memory = null;
let arithmetic = null;

function init(){
    display = document.getElementById('display');
    let keyBoard = document.getElementById('keyBoard');
    keyBoard.onclick = buttonClick;
}

function buttonClick(e){
    let btn = e.target.id;

    if(btn.substring(0,1) === 'b'){
        let digit = btn.substring(1,2);
        addDigit(digit);
    }

    else{
        if(btn === 'clear'){
            memClear();
        }

        else if(btn === 'calc'){
            calculate();
        }

        else{
            setOperator(btn);
        }
    }
}

function addDigit(digit){
    display.value += digit;
    console.log(digit);
}

function setOperator(operator){
    console.log(operator);
    memory = Number(display.value);
    arithmetic = operator;
    clearDisplay();
}

function calculate(){
    if(arithmetic === null || memory === null || display.value === null){
        return;
    }

    let finalValue;

    if(arithmetic === 'add'){
        finalValue = memory + Number(display.value);
    }
    else if(arithmetic === 'sub'){
        finalValue = memory - Number(display.value);
    }
    else if(arithmetic === 'mul'){
        finalValue = memory * Number(display.value);
    }
    else if(arithmetic === 'div'){
        finalValue = memory / Number(display.value);
    }
    console.log(display.value);
    display.value = finalValue;
}

function clearDisplay(){
    display.value = '';
}

function memClear(){
    memory = 0;
    arithmetic = null;
    clearDisplay();
}

window.onload = init;