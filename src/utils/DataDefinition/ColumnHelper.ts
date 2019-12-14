import ColumnDefinition from "../classes/ColumnDefinition";
import {ValueTypes} from "../enums/ValueTypes";

export default class ColumnHelper {
    public static GenerateColumnDefinitions(): ColumnDefinition[] {
        return [
            new ColumnDefinition("Id", ValueTypes.String, "id"),
            new ColumnDefinition("Key", ValueTypes.String, "key"),
            new ColumnDefinition("Name", ValueTypes.String, "name"),
            new ColumnDefinition("Title", ValueTypes.String, "title"),
            new ColumnDefinition("Blurb", ValueTypes.String, "blurb"),
            // Info
            new ColumnDefinition("Attack", ValueTypes.Number, (champion => champion && champion.info && champion.info.attack)),
            new ColumnDefinition("Defence", ValueTypes.Number, (champion => champion && champion.info && champion.info.defense)),
            new ColumnDefinition("Magic", ValueTypes.Number, (champion => champion && champion.info && champion.info.magic)),
            new ColumnDefinition("Difficulty", ValueTypes.Number, (champion => champion && champion.info && champion.info.difficulty)),
            new ColumnDefinition("Tags", ValueTypes.StringArray, "tags"),
            new ColumnDefinition("Hit points", ValueTypes.Number, (champion => champion && champion.stats && champion.stats.hp)),
            new ColumnDefinition("Hp regen per level", ValueTypes.Number, champion => (champion && champion.stats && champion.stats.hpregenperlevel)),
            new ColumnDefinition("Movement speed", ValueTypes.Number, champion => (champion && champion.stats && champion.stats.movespeed)),
            new ColumnDefinition("Mp per level", ValueTypes.Number, champion => (champion && champion.stats && champion.stats.mpperlevel)),
        ]
    }
}

