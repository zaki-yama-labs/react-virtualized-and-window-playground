import React, { CSSProperties } from "react";
import {
  MultiGrid as VirtualizedMultiGrid,
  AutoSizer,
  GridCellProps,
} from "react-virtualized";

const STYLE = {
  border: "1px solid #ddd",
};
const STYLE_BOTTOM_LEFT_GRID: CSSProperties = {
  borderRight: "2px solid #aaa",
  backgroundColor: "#f7f7f7",
};
const STYLE_TOP_LEFT_GRID: CSSProperties = {
  borderBottom: "2px solid #aaa",
  borderRight: "2px solid #aaa",
  fontWeight: "bold",
};
const STYLE_TOP_RIGHT_GRID: CSSProperties = {
  borderBottom: "2px solid #aaa",
  fontWeight: "bold",
};

/**
 * ref. https://bvaughn.github.io/react-virtualized/#/components/MultiGrid
 */
export class MultiGrid extends React.PureComponent {
  constructor(props: any) {
    super(props);

    this.state = {
      fixedColumnCount: 2,
      fixedRowCount: 1,
      scrollToColumn: 0,
      scrollToRow: 0,
    };

    this._cellRenderer = this._cellRenderer.bind(this);
  }

  _cellRenderer({ columnIndex, key, rowIndex, style }: GridCellProps) {
    return (
      <div className="Cell" key={key} style={style}>
        {columnIndex}, {rowIndex}
      </div>
    );
  }

  render() {
    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <VirtualizedMultiGrid
            {...this.state}
            cellRenderer={this._cellRenderer}
            columnWidth={75}
            columnCount={50}
            enableFixedColumnScroll
            enableFixedRowScroll
            height={300}
            rowHeight={40}
            rowCount={100}
            style={STYLE}
            styleBottomLeftGrid={STYLE_BOTTOM_LEFT_GRID}
            styleTopLeftGrid={STYLE_TOP_LEFT_GRID}
            styleTopRightGrid={STYLE_TOP_RIGHT_GRID}
            width={width}
            hideTopRightGridScrollbar={false}
            hideBottomLeftGridScrollbar
          />
        )}
      </AutoSizer>
    );
  }
}
