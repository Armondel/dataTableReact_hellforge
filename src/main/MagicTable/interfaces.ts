import {ComponentType, ReactNode} from "react";
import {GridCellProps} from "react-virtualized";
import ColumnDefinition from "../../utils/classes/ColumnDefinition";

export interface IMagicTableProps<T> {
    cellRenderer: ComponentType<ICellRendererProps<T>>
    columnDefinitions: ColumnDefinition[],
    columnHeaderRenderer: ComponentType<IHeaderCellRendererProps>,
    data: T[],
}

export interface IHeaderCellRendererProps {
    config: ColumnDefinition,
    gridCellProps: GridCellProps
}

export interface ICellRendererProps<T> extends IHeaderCellRendererProps {
    data: T
}