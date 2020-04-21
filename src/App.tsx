import React, { useRef, useEffect } from "react";

// ref. https://github.com/bvaughn/react-virtualized-auto-sizer/blob/master/src/index.js
type Props = {
  children: (width: number, height: number) => React.ReactNode;
};

const AutoSizer: React.FC<Props> = ({ children }) => {
  return <div>{children(30, 40)}</div>;
};

// ref. https://ja.reactjs.org/docs/hooks-reference.html#useref
// export function TextInputWithFocusButton() {
export const App = () => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputEl.current);
  }, []);

  const onButtonClick = () => {
    console.log(inputEl.current);
    // `current` points to the mounted text input element
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
  };
  return (
    <AutoSizer>
      {(width, height) => {
        return (
          <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
          </>
        );
      }}
    </AutoSizer>
  );
};
