
const out = document.getElementsByClassName("result")[0];
const input = document.getElementsByClassName("enter")[0];
const buttons = document.querySelectorAll(".buttons .button");
const inputNumber = document.getElementById('myInput');

let min = 1;
let max = 10;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        let buttonClass = button.className;
        console.log(buttonClass);
        if (buttonClass.includes("easy")) {
            min = 1;
            max = 2;
        }
        else if (buttonClass.includes("hard")) {
            min = 1;
            max = 100;
        }
        else {
            min = 1;
             max = 10;
        }
        console.log(min + " - min, max -  " + max);
        inputNumber.setAttribute('min', min);
        inputNumber.setAttribute('max', max);

    });
});

console.log(min + " - min, max -  " + max);

inputNumber.setAttribute('min', min);
inputNumber.setAttribute('max', max);

function letsPlay() {
    input.addEventListener('keydown', function (event) {
        if (event.key == "Enter") {
            const enteredNumber = event.target.value;
            console.log(enteredNumber);
            let genNum = Math.floor(Math.random() * (max - min + 1) + min);
            if (genNum == enteredNumber) {
                console.log("you won");
                out.textContent = "Поздравляю, ты не лох";
            }
            else {
                console.log("you lose");
                out.textContent = "Ты лошара комп загадал " + genNum;
            }
        }
    });
}

letsPlay();
