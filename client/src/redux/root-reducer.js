import { combineReducers } from 'redux';
import notes from './notes/reducer';

function general(state = { modalIsOpen: false }, action) {
  switch (action.type) {
    case "MODAL_TOGGLE":
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      };
    default:
      return state;
  }
}

export default combineReducers({
  general,
  notes,
});
