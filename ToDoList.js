
function Hozzáad(){
    let termék_érték = document.getElementById("termék").value;
    let termék = document.getElementById("termék");
    const lista = document.getElementById("lista");
    const új_elem = document.createElement('li');
    új_elem.textContent = termék_érték;
    új_elem.classList.add("termek-elem");
    lista.appendChild(új_elem);
    termék.value = "";
}

function Tisztítás(){
    const lista = document.getElementById("lista");
    lista.textContent = null;
}

function UtolsóElemTörlés(){
    const lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);
}
