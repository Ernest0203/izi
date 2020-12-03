import actions from './actions';

const initialState = {
  data: []
};

export default function notes(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: [...data]
      };
    case actions.CREATE_ITEM_SUCCESS:
      return {
        ...state,
        data: [ data, ...state.data ]        
      }
    case actions.REMOVE_ITEM_SUCCESS:
      const newData = state.data.filter(item => item._id !==data);
      return {
        ...state,
        data: newData
      }

    default:
      return state;
  }
}