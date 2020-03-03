import React, { useReducer } from "react";
import { clickCounterReducer, increment } from "./click-counter-reducer";
import ClickCounter from "./click-counter-component";

export function ClickCounterContainer(props) {
  const [state, dispatch] = useReducer(
    clickCounterReducer,
    clickCounterReducer()
  );

  return <ClickCounter counter={state.counter} />;
}
