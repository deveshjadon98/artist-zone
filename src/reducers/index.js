import { combineReducers } from 'redux';
import configReducer from './configReducer';
import artistReducer from './artistReducer';

export default combineReducers({
  config: configReducer,
  artist: artistReducer
});
