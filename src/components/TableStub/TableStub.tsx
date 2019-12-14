import * as React from "react";
import championJsonData from "../../data/championData.json";

import {ChampionData} from "../../utils/classes/ChampionData";
import MagicTable from "../../main/MagicTable";
import {IMagicTableProps} from "../../main/MagicTable/interfaces";
import Champion from "../../utils/classes/Champion";

import ColumnDefinition from "../../utils/classes/ColumnDefinition";
import ColumnHelper from "../../utils/DataDefinition/ColumnHelper";
import {ChampionNames} from "../../utils/enums/ChampionNames";
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";

const TableStub: React.FC = () => {
    const championData = new ChampionData(championJsonData);

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
        cellRenderer: TableCell,
        columnHeaderRenderer: TableHeaderCell
    };

    return (
        <MagicTable {...magicTableProps} />
    )
};

export default TableStub;