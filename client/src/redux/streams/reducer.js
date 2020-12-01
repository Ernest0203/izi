import actions from './actions';

const initialState = {
  data: ''
};

export default function streams(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: data
      };

    default:
      return state;
  }
}