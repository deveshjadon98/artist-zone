import ACTIONS from '../constants/actionTypes';

export const configLoaded = config => {
  return {
    type: ACTIONS.CONFIG_LOADED,
    config: config,
  };
};

export const requestArtist = query => {
  return {
    type: ACTIONS.REQUEST_ARTIST,
    payload: {
      query: query
    },
  };
};

export const receiveArtist = payload => {
  return {
    type: ACTIONS.RECEIVE_ARTIST,
    payload: payload,
  };
};

export const requestEvents = artist => {
  return {
    type: ACTIONS.REQUEST_EVENTS,
    payload: {
      artist: artist
    },
  };
};

export const receiveEvents = payload => {
  return {
    type: ACTIONS.RECEIVE_EVENTS,
    payload: payload,
  };
};

export const getDataFromDB = payload => {
  return {
    type: ACTIONS.GET_DATA_FROM_DB,
    payload: payload,
  };
};