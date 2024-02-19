import { NobleHouse } from "./NobleHouse";
import { HouseRules } from "./HouseRules";

export class Targaryen extends NobleHouse implements HouseRules {
    constructor() {
        super("Targaryen", "Fire and Blood");
    }

    loyaltyOath() {
        console.log("Fire and Blood!");
    }
}
