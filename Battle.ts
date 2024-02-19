import { NobleHouse } from "./NobleHouse";

export function BattleOfTheHouses(house1: NobleHouse, soldiers1: number, house2: NobleHouse, soldiers2: number): string {
    if (soldiers1 > soldiers2) {
        return house1.name;
    } else if (soldiers2 > soldiers1) {
        return house2.name;
    } else {
        return "It's a tie!";
    }
}
