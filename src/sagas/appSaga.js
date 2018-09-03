import ACTIONS from '../constants/actionTypes';
import {
  take,
  call,
  put,
  select,
  all,
  cancel,
  fork
} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import axios from 'axios';
import {
  artistActionCreator
} from '../actions';
import localforage from 'localforage';

//SAMPLE SAGA WITH A GET API CALL

function getArtist(API_URL) {
  // debugger
  return axios({
    method: 'get',
    url: API_URL,
    params: {
      app_id: 'app_id'
    }
  }).catch(err => {
    console.log(err);
  });
}

function* handleSearch(action, query) {
  yield call(delay, 1000)
  const API_URL = yield select(state => state.config.API_URL);
  const requestUrl = API_URL + 'artists/' + query;
  const result = yield call(getArtist, requestUrl);
  yield localforage.setItem('artist',result.data);
  yield put(artistActionCreator.receiveArtist(result.data));
  yield put(artistActionCreator.requestEvents(query));
}

function* getArtistWatcher() {
  let task;
  while (true) {
    const action = yield take(ACTIONS.REQUEST_ARTIST);
    try {
      const query = action.payload.query;
      if(query != ""){
        if (task) {
          yield cancel(task)
        }
        task = yield fork(handleSearch, action, query)
      }else{
        yield put(artistActionCreator.receiveArtist(""));        
      }
    } catch (err) {}
  }
}

function getEvents(API_URL) {
  return axios({
    method: 'get',
    url: API_URL,
    params: {
      app_id: 'app_id'
    }
  }).catch(err => {
    console.log(err);
  });
}

function* getEventsWatcher() {
  while (true) {
    const action = yield take(ACTIONS.REQUEST_EVENTS);
    try {
      const artist_name = action.payload.artist;
      const API_URL = yield select(state => state.config.API_URL);
      const requestUrl = API_URL + 'artists/' + artist_name+ '/events';
      const result = yield call(getEvents, requestUrl);
      yield localforage.setItem('events',result.data);      
      yield put(artistActionCreator.receiveEvents(result.data));
    } catch (err) {}
  }
}

function* getDataFromDB(){
  while (true) {
    const action = yield take(ACTIONS.GET_DATA_FROM_DB);
    try {
      const artist = yield localforage.getItem('artist');            
      const events = yield localforage.getItem('events');  
      yield put(artistActionCreator.receiveArtist(artist));          
      yield put(artistActionCreator.receiveEvents(events));
    } catch (err) {}
  }
}

export default function* appSaga() {
  yield all([
    getArtistWatcher(),
    getEventsWatcher(),
    getDataFromDB()
  ]);
}
