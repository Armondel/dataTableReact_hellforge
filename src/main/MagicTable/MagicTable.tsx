import * as React from "react";
import {AutoSizer, defaultCellRangeRenderer, GridCellProps, GridCellRangeProps, MultiGrid} from "react-virtualized";
import {ICellRendererProps, IHeaderCellRendererProps, IMagicTableProps} from "./interfaces";

const MagicTable: React.FC<IMagicTableProps<any>> = props => {
    const {
        data,
        cellRenderer: customCellRenderer,
        columnDefinitions,
        columnHeaderRenderer
    } = props;

    const [tableData, setTableData] = React.useState<any[]>([]);

    React.useEffect(() => {
        setTableData(data);
    }, [data]);

    const cellRenderer = React.useCallback((gridCellProps: GridCellProps) => {
        const column = columnDefinitions[gridCellProps.columnIndex];

        return gridCellProps.rowIndex
            ? React.createElement<ICellRendererProps<any>>(
                customCellRenderer,
                {
                    data: tableData[gridCellProps.rowIndex - 1],
                    config: column,
                    gridCellProps
                }
            )
            : React.createElement<IHeaderCellRendererProps>(
                columnHeaderRenderer,
                {
                    config: column,
                    gridCellProps
                }
            )
    }, [tableData, customCellRenderer, columnDefinitions, columnHeaderRenderer]);

    const cellRangeRenderer = React.useCallback((props: GridCellRangeProps) => {
        const children = defaultCellRangeRenderer(props);
        console.log(children.length);

        return children;
    }, []);

    return (
        <AutoSizer>
            {({height, width}) => (
                <MultiGrid
                    cellRenderer={cellRenderer}
                    cellRangeRenderer={cellRangeRenderer}
                    columnCount={columnDefinitions.length}
                    columnWidth={150}
                    fixedRowCount={1}
                    height={height}
                    rowCount={tableData.length + 1}
                    rowHeight={50}
                    width={width}
                />
            )}
        </AutoSizer>
    )
};

export default MagicTable;