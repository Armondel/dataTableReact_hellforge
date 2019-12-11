import ColumnDefinition from "../classes/ColumnDefinition";
import {ValueTypes} from "../enums/ValueTypes";

export default class ColumnHelper {
    public static GenerateColumnDefinitions(): ColumnDefinition[] {
        return [
            new ColumnDefinition("Name", ValueTypes.String, "name"),
            new ColumnDefinition("Title", ValueTypes.String, "title"),
            new ColumnDefinition("Tags", ValueTypes.StringArray, "tags"),
            new ColumnDefinition("Hit points", ValueTypes.Number, (champion => (champion && champion.stats && champion.stats.hp) || 0)),
            new ColumnDefinition("Hp regen per level", ValueTypes.Number, (champion => (champion && champion.stats && champion.stats.hpregenperlevel) || 0)),
            new ColumnDefinition("Movement speed", ValueTypes.Number, (champion => (champion && champion.stats && champion.stats.movespeed) || 0)),
            new ColumnDefinition("Mp per level", ValueTypes.Number, (champion => (champion && champion.stats && champion.stats.mpperlevel) || 0)),
        ]
    }
}

