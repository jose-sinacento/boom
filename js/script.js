const userInput = document.getElementById("userInput");
const computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
const countDown = document.getElementById('countdown');
const resultado = document.getElementById('result');
const btnRestart = document.getElementById('restart');


userInput.addEventListener('change', function (event) {
    const userSelection = event.target.value;
    const promesaBomba = new Promise((resolve) => {
        setTimeout(() => {
            countDown.innerHTML = "Cuenta atrás: 5 segundos";
        }, 1000);
        setTimeout(() => {
            countDown.innerHTML = "Cuenta atrás: 4 segundos";
        }, 2000);
        setTimeout(() => {
            countDown.innerHTML = "Cuenta atrás: 3 segundos";
        }, 3000);
        setTimeout(() => {
            countDown.innerHTML = "Cuenta atrás: 2 segundos";
        }, 4000);
        setTimeout(() => {
            countDown.innerHTML = "Cuenta atrás: 1 segundos";
        }, 5000);
        setTimeout(() => {
            countDown.innerHTML = "Cuenta atrás: 0 segundos";
        }, 6000);
        setTimeout(() => {
            countDown.innerHTML = " ";
        }, 7000);

        setTimeout(() => {
            resolve();
        }, 8000);
    });

    promesaBomba.then(() => {
        if (parseInt(userSelection) === computerChoice) {
            resultado.innerHTML =  `¡Has salvado el mundo!<br>Tu número es ${userSelection} es el mismo que el número ${computerChoice}`;
        } else {
            resultado.innerHTML = `La bomba ha estallado<br>Tu número es ${userSelection} no es el mismo que el número ${computerChoice}`;
        }
    });
});

btnRestart.addEventListener('click', function() {
    // computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
    window.location.reload();
});

