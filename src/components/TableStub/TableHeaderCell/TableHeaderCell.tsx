import * as React from "react";
import {css} from "aphrodite";
import styles from "./styles";
import {IHeaderCellRendererProps} from "../../../main/MagicTable/interfaces";

const TableHeaderCell: React.FC<IHeaderCellRendererProps> = (props) => {
    const {
        gridCellProps: {
            key,
            style
        },
        config: {
            name
        }
    } = props;

    return (
        <div
            key={key}
            style={style}
            className={css(styles.tableHeaderCell)}
        >
            <span>{name}</span>
        </div>
    )
};

export default TableHeaderCell;