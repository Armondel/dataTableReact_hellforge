import {ReactNode} from "react";
import {GridCellProps} from "react-virtualized";
import ColumnDefinition from "../../utils/classes/ColumnDefinition";

export interface IMagicTableProps<T> {
    cellRenderer: (data: T, config: ColumnDefinition, props: GridCellProps) => ReactNode,
    columnDefinitions: ColumnDefinition[],
    columnHeaderRenderer: (config: ColumnDefinition, props: GridCellProps) => ReactNode,
    data: T[],
}