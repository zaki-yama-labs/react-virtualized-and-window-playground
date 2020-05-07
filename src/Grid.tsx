import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";

import { VariableSizeGrid, GridChildComponentProps } from "react-window";

const Cell: React.FC<GridChildComponentProps> = ({
  columnIndex,
  rowIndex,
  style,
}) => {
  return (
    <div
      className={
        columnIndex % 2
          ? rowIndex % 2 === 0
            ? "GridItemOdd"
            : "GridItemEven"
          : rowIndex % 2
          ? "GridItemOdd"
          : "GridItemEven"
      }
      style={style}
    >
      r{rowIndex}, c{columnIndex}
    </div>
  );
};

const columnWidth = (index: number) => {
  return 80;
};

const rowHeight = (index: number) => {
  return 28;
};

export const Grid = () => (
  <AutoSizer>
    {({ width, height }) => (
      <VariableSizeGrid
        columnCount={30}
        columnWidth={columnWidth}
        height={height}
        rowCount={500}
        rowHeight={rowHeight}
        width={width}
      >
        {Cell}
      </VariableSizeGrid>
    )}
  </AutoSizer>
);
