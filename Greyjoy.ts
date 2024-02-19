import { NobleHouse } from "./NobleHouse";
import { HouseRules } from "./HouseRules";

export class Greyjoy extends NobleHouse implements HouseRules {
    constructor() {
        super("Greyjoy", "We Do Not Sow");
    }

    loyaltyOath() {
        console.log("What Is Dead May Never Die!");
    }
}
