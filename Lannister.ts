import { NobleHouse } from "./NobleHouse";
import { HouseRules } from "./HouseRules";

export class Lannister extends NobleHouse implements HouseRules {
    constructor() {
        super("Lannister", "Hear Me Roar!");
    }

    loyaltyOath() {
        console.log("A Lannister always pays his debts.");
    }
}
