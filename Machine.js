"use strict"
const process = document.getElementById("process");
const progressBar = document.getElementsByClassName("progress")[0];

export class Machine {
    constructor() {
        this.state = "stopped";
        this.time = 2000;
        this.timer = null;
        this.interval = null;
    }
    run() {
        this.state = "started";
        process.innerHTML += "I'm starting work...<br>"
        process.innerHTML += `Cooking time - ${this.time}<br>`;
        let progressPercent = +this.time / 100;
        progressPercent = (+this.time - progressPercent) / 100;
        let i = 0;
        this.interval = setInterval(() => {
            i++;
            if (i <= 100) {
                progressBar.innerHTML = `<div class='progress-bar bg-secondary progress-bar-striped' style='width:${i}%'>${i}%</div>`;
            }
        }, progressPercent);
        this.timer = setTimeout(this.onReady.bind(this), this.time);
    }
    onReady = () => {
        clearInterval(this.interval);
        clearTimeout(this.timer);
        process.innerHTML += "Ready!<br>";
        this.state = "stopped";
    }
    stop = () => {
        clearInterval(this.interval);
        clearTimeout(this.timer);
        process.innerHTML += "Forced shutdown";
        this.state = "stopped";
        process.innerHTML = "";
        progressBar.innerHTML = "";
    }
}