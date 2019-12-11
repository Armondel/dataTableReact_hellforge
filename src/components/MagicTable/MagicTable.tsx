import * as React from "react";
import {AutoSizer, GridCellProps, MultiGrid} from "react-virtualized";

const MagicTable: React.FC = () => {

    const cellRenderer = ({columnIndex, key, rowIndex, style}: GridCellProps) => (
        <div
            key={key}
            style={style}>
            {`${columnIndex} : ${rowIndex}`}
        </div>
    );

    return (
        <AutoSizer>
            {({height, width}) => (
                <MultiGrid
                    cellRenderer={cellRenderer}
                    columnCount={50}
                    columnWidth={75}
                    fixedRowCount={1}
                    height={height}
                    rowCount={50}
                    rowHeight={30}
                    width={width}
                />
            )}
        </AutoSizer>
    )
};

export default MagicTable;