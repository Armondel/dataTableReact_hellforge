import * as React from "react";
import {AutoSizer, GridCellProps, MultiGrid} from "react-virtualized";
import {IMagicTableProps} from "./interfaces";

const MagicTable: React.FC<IMagicTableProps<any>> = props => {
    const {
        data,
        cellRenderer: customCellRenderer,
        columnDefinitions,
        columnHeaderRenderer
    } = props;

    const cellRenderer = React.useCallback((gridCellProps: GridCellProps) => {
        const column = columnDefinitions[gridCellProps.columnIndex];

        return gridCellProps.rowIndex
            ? customCellRenderer(data[gridCellProps.rowIndex - 1], column, gridCellProps)
            : columnHeaderRenderer(column, gridCellProps)
    }, [data, customCellRenderer, columnDefinitions, columnHeaderRenderer]);

    return (
        <AutoSizer>
            {({height, width}) => (
                <MultiGrid
                    cellRenderer={cellRenderer}
                    columnCount={columnDefinitions.length}
                    columnWidth={150}
                    fixedRowCount={1}
                    height={height}
                    rowCount={data.length + 1}
                    rowHeight={50}
                    width={width}
                />
            )}
        </AutoSizer>
    )
};

export default MagicTable;