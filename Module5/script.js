let pArray = document.querySelectorAll("body > main > section > *");


for (let i = 0; i < pArray.length; i++) {
    let p = pArray[i];
    const custom = p.getAttribute("cdata")
    p.addEventListener("mouseover", () => {
        p.style.backgroundColor = 'grey';
        info(custom);
    });
    p.addEventListener("mouseout", () => {
        p.style.backgroundColor = 'white';
    });
}

async function info(val) {
    let div = document.getElementById('content');

    let res = await fetch('data.json');
    /**
     * @type {{[country:string]:string[]}}
     */
    let obj = await res.json();

    div.replaceChildren(...obj[val].map((val) => {
        const temp_elem = document.createElement("span");
        temp_elem.textContent = val;
        return temp_elem
    })
    )

}