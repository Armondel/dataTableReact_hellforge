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

    public getChampionPropertyInfo <T>(championName: ChampionNames, path: string | ((champion: IChampion) => T)): T {
        const champion = this.getChampionInfo(championName);
        if (typeof(path) === "string") {
            return champion[path] as T;
        } else {
            return path(champion);
        }
    }
}