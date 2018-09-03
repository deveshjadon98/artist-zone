import ACTIONS from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_ARTIST:
      return { ...state, artist: {} };
    case ACTIONS.RECEIVE_ARTIST:
      return { ...state, artist: action.payload };
    case ACTIONS.REQUEST_EVENTS:
      return { ...state, events: [] };
    case ACTIONS.RECEIVE_EVENTS:
      return { ...state, events: action.payload };
    default:
      return { ...state };
  }
};
