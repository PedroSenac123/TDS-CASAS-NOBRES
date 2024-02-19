import { HouseHeir } from "./HouseHeir";

export class NobleHouse {
    public name: string;
    public motto: string;
    public heirs: HouseHeir[];

    constructor(name: string, motto: string) {
        this.name = name;
        this.motto = motto;
        this.heirs = [];
    }

    addHeir(heir: HouseHeir) {
        this.heirs.push(heir);
    }

    printInfo() {
        console.log(`House: ${this.name}`);
        console.log(`Motto: ${this.motto}`);
        console.log("Heirs:");
        this.heirs.forEach((heir, index) => {
            console.log(`- ${heir.name}, Age: ${heir.age}, Succession Position: ${heir.successionPosition}`);
        });
    }
}
