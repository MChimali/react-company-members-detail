import React from "react";

type testResult = [() => void, React.MutableRefObject<HTMLInputElement>];

export const useFocusRef = (): testResult => {
  const ref = React.useRef<HTMLInputElement>();
  const focusInput = () => ref.current.focus();
  React.useEffect(() => {
    ref.current.focus();
  }, []);

  return [focusInput, ref];
};