import Actions from './actions/actions';

const initialState = {
  phones: [],
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.GET_PHONE:
      return { ...state, phones: payload };
    default:
      return state;
  }
};

export default Reducer;
