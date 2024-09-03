let btn = document.getElementById('btn');
btn.addEventListener("click", addTask);

function addTask(event){
    event.preventDefault();
    let task = document.createElement('li');
    let list = document.querySelector('ul');
    task.innerText = ip.value;
    list.appendChild(task);
    ip.value = '';

    task.addEventListener("click", function(){
        task.style.textDecoration = 'line-through';
    })

    task.addEventListener("dblclick", ()=>{
        list.removeChild(task);
    })
}