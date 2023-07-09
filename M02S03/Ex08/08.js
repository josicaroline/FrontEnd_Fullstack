
//Exemplo Interval:

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('resultado').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
