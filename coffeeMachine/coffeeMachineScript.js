"use strict"
import { CoffeeMachine } from "./CoffeeMachine.js";

let coffeeMachine = new CoffeeMachine();

const startButton = document.getElementById("start");
const drinkSelect = document.getElementById("drinks");
startButton.addEventListener("click", () => {
    if (coffeeMachine.state === "stopped") {
        process.innerHTML = "";
        coffeeMachine.run(drinkSelect.value);
    }
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
    coffeeMachine.stop();
});