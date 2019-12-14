import {ChampionNames} from "../enums/ChampionNames"
import Champion from "./Champion";

export class ChampionData {
    private readonly data: {
        [x: string]: Champion
    };

    constructor(parsedJson: { data: any }) {
        this.data = parsedJson.data;
    }

    public getChampionInfo(value: ChampionNames): Champion {
        const championName: string = ChampionNames[value];
        return this.getChampionInfoByName(championName);
    }

    public getChampionInfoByName(value: string): Champion {
        return new Champion(this.data[value])
    }

}