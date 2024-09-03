let btn = document.getElementById('btn');
btn.addEventListener('click', number_func);
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1));
let attempts = 0;
let article = document.querySelector('article');

function number_func(event){
    event.preventDefault();
    const value = ip.value ;
    ip.value = '';
    let text = document.createElement('p');
    if(isNaN(Number(value))){
        text.innerText = 'Enter a valid number!';
        
    }
    else if(Number(value) < 1 || Number(value) > 100){
        text.innerText = 'Enter a valid number!';
        
    }
    else{
        attempts++;
        if(Number(value) < answer){
            text.innerText = 'Too low, try again';
            
        }
        else if(Number(value) > answer){
            text.innerText = 'Too high, try again';
            
        }
        else{
            text.innerText = 'Correct, the answer was ' + answer + ' and it took you ' + attempts + ' attempts. Play again?';
            let button1 = document.createElement('button');
            let button2 = document.createElement('button');
            button1.textContent = 'Yes';
            button2.textContent = 'No';
            text.appendChild(button1);
            text.appendChild(button2);

            button1.addEventListener('click', () => {
                location.reload();
            })

            button2.addEventListener('click', () => {
                window.close();
            })
        }
    }
    article.appendChild(text);
}