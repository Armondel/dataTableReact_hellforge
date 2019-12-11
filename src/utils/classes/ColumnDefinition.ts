import {ValueTypes} from "../enums/ValueTypes";
import Champion from "./Champion";

export default class ColumnDefinition {
    public name: string;
    public valueType: ValueTypes;
    public path: string | ((champion: Champion) => any);

    constructor(name: string, valueType: ValueTypes, path: string | ((champion: Champion) => any)){
        this.name = name;
        this.valueType = valueType;
        this.path = path;
    }
}