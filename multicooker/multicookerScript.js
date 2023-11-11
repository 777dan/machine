"use strict"
import { Multicooker } from "./Multicooker.js";

let multicooker = new Multicooker();

const startButton = document.getElementById("start");
const foodSelect = document.getElementById("food");
startButton.addEventListener("click", () => {
    if (multicooker.state === "stopped") {
        process.innerHTML = "";
        multicooker.run(foodSelect.value);
    }
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
    multicooker.stop();
});




