import {ChampionNames} from "./championNames"
import {IChampion} from "./champion";

export class ChampionData {
    private readonly data: {
        [x: string]: IChampion
    };

    constructor(parsedJson: { data: any }) {
        this.data = parsedJson.data;
    }

    public getChampionInfo(value: ChampionNames): IChampion {
        const championName: string = ChampionNames[value];
        return this.data[championName];
    }
}