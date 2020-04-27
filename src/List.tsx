import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";

import { FixedSizeList, ListChildComponentProps } from "react-window";

const Row: React.FC<ListChildComponentProps> = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

export const List = () => (
  <AutoSizer>
    {({ height, width }) => (
      <FixedSizeList
        className="List"
        height={height}
        itemCount={1000}
        itemSize={35}
        width={width}
      >
        {Row}
      </FixedSizeList>
    )}
  </AutoSizer>
);
