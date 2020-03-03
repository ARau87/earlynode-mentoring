const increment = () => ({ type: increment.type });
increment.type = "INCREMENT";

const incrementBy = payload => ({ type: incrementBy.type, payload });
incrementBy.type = "INCREMENT_BY";

const initialState = {
  counter: 0
};

const clickCounterReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case increment.type:
      return { ...state, counter: state.counter + 1 };
    case incrementBy.type:
      return { ...state, counter: state.counter + payload };
    default:
      return state;
  }
};

export { increment, incrementBy, clickCounterReducer };
