"use strict"
import { Machine } from "../Machine.js";

export class Multicooker extends Machine {
    constructor() {
        super();
        this.food = "soup";
    }
    run(food) {
        if (food != undefined) this.drink = food;
        process.innerHTML += `Cooking: ${this.drink} `;
        switch (this.drink) {
            case "stewing":
                this.time = 10000;
                break;
            case "bakery":
                this.time = 7000;
                break;
            default:
                this.time = 3000;
        }
        super.run();
    }
}