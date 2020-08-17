import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// worker Saga: will be fired on "REGISTER" actions
function* postProfile(action) {
    try {
        yield axios.post('/api/profile', action.payload);
        yield put({ type: 'GET_PROFILE' });
    } catch (error) {
        console.log('Error with postProfile:', error);

    }
}

function* getProfile(action) {
    const response = yield axios.get('/api/profile', action.payload);
    yield put({ type: 'SET_PROFILE', payload: response.data });
}

function* profileSaga() {
    yield takeLatest('POST_PROFILE', postProfile);
    yield takeLatest('GET_PROFILE', getProfile);

}

export default profileSaga;