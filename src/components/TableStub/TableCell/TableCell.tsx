import {ValueTypes} from "../../../utils/enums/ValueTypes";
import * as React from "react";
import {css} from "aphrodite";
import styles from "./styles";
import {ICellRendererProps} from "../../../main/MagicTable/interfaces";
import Champion from "../../../utils/classes/Champion";

const TableCell: React.FC<ICellRendererProps<Champion>> = (props) => {
    const {
        gridCellProps: {
            style,
            key
        },
        config: {
            path,
            valueType
        },
        data
    } = props;

    let cellValue: string;
    switch (valueType) {
        case ValueTypes.String:
            cellValue = data.getChampionPropertyInfo<string>(path);
            break;
        case ValueTypes.Number:
            cellValue = data.getChampionPropertyInfo<number>(path).toString();
            break;
        case ValueTypes.StringArray:
            cellValue = data.getChampionPropertyInfo<string[]>(path).reduce((acc: string, value: string) => acc + `, ${value}`);
            break;
    }

    return (
        <div
            key={key}
            style={style}
            className={css(styles.tableCell)}
        >
            {cellValue}
        </div>
    )
};

export default TableCell;