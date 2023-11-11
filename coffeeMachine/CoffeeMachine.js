"use strict"
import { Machine } from "../Machine.js";

export class CoffeeMachine extends Machine {
    constructor() {
        super();
        this.drink = "water";
    }
    run(drink) {
        if (drink != undefined) this.drink = drink;
        process.innerHTML += `Cooking: ${this.drink} `;
        switch (this.drink) {
            case "latte":
                this.time = 5000;
                break;
            case "espresso":
                this.time = 3000;
                break;
            default:
                this.time = 1000;
        }
        super.run();
    }
}