import { NobleHouse } from "./NobleHouse";
import { HouseRules } from "./HouseRules";

export class Baratheon extends NobleHouse implements HouseRules {
    constructor() {
        super("Baratheon", "Ours is the Fury");
    }

    loyaltyOath() {
        console.log("Ours is the Fury!");
    }
}
