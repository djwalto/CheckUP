import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// worker Saga: will be fired on "REGISTER" actions
function* postForm(action) {
    try {
        yield axios.post('/api/form', action.payload);
        yield put({ type: 'GET_FORM' });
    } catch (error) {
        console.log('Error with postForm:', error);

    }
}

function* getForm(action) {
    const response = yield axios.get('/api/form', action.payload);
    yield put({ type: 'SET_FORM', payload: response.data });
}

function* formSaga() {
    yield takeLatest('POST_FORM', postForm);
    yield takeLatest('GET_FORM', getForm);

}

export default formSaga;
