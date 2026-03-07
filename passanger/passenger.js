
let saveEl = document.getElementById("save_el")
let CountEl = document.getElementById("count_el")
let count = 0;


function Increament() {
    count += 1;
    CountEl.textContent = count
}

function save() {
    let countstr = count + " - "
    saveEl.innerText += countstr


    CountEl.textContent = 0 
    console.log(count)
}






