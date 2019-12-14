import * as React from "react";
import championJsonData from "../../data/championData.json";

import {ChampionData} from "../../utils/classes/ChampionData";
import MagicTable from "../MagicTable";
import {GridCellProps} from "react-virtualized";
import {IMagicTableProps} from "../MagicTable/interfaces";
import Champion from "../../utils/classes/Champion";

import ColumnDefinition from "../../utils/classes/ColumnDefinition";
import ColumnHelper from "../../utils/DataDefinition/ColumnHelper";
import {ChampionNames} from "../../utils/enums/ChampionNames";
import {ValueTypes} from "../../utils/enums/ValueTypes";

const TableStub: React.FC = () => {
    const championData = new ChampionData(championJsonData);

    const stubCellRenderer = React.useCallback((rowData: Champion, config: ColumnDefinition, gridCellProps: GridCellProps) => {
        const {
            style,
            key
        } = gridCellProps;

        const {
            path,
            valueType
        } = config;

        let cellValue: string;
        switch (valueType) {
            case ValueTypes.String:
                cellValue = rowData.getChampionPropertyInfo<string>(path);
                break;
            case ValueTypes.Number:
                cellValue = rowData.getChampionPropertyInfo<number>(path).toString();
                break;
            case ValueTypes.StringArray:
                cellValue = rowData.getChampionPropertyInfo<string[]>(path).reduce((acc, value) => acc + `, ${value}`);
                break;
        }

        return (
            <div
                key={key}
                style={style}>
                {cellValue}
            </div>
        )
    }, []);

    const stubHeaderCellRenderer = React.useCallback((config: ColumnDefinition, gridCellProps: GridCellProps) => {
        const {
            key,
            style
        } = gridCellProps;

        return (
            <div
                key={key}
                style={style}
            >
                <span>{config.name}</span>
            </div>
        )
    }, []);

    const stubGridData: Champion[] = React.useMemo(() =>
        Object.keys(ChampionNames)
            .filter((x: string) => isNaN(parseInt(x)))
            .map((x: string) => championData.getChampionInfoByName(x))
        , [championData]);

    const stubGridColumnDefinitions: ColumnDefinition[] = React.useMemo(() =>
            ColumnHelper.GenerateColumnDefinitions()
        , []);

    const magicTableProps: IMagicTableProps<Champion> = {
        data: stubGridData,
        columnDefinitions: stubGridColumnDefinitions,
        cellRenderer: stubCellRenderer,
        columnHeaderRenderer: stubHeaderCellRenderer
    };

    return (
        <MagicTable {...magicTableProps} />
    )
};

export default TableStub;