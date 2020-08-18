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

function* updateForm(action) {
    try {
        yield axios.put('/api/form/:id', action.payload);
        yield put({ type: 'SET_FORM' });
        yield put({ type: 'GET_FORM' });
    } catch (error) {
        console.log('Error with putForm:', error);

    }
}

function* getForm(action) {
    try {
        const response = yield axios.get('/api/form', action.payload);
        yield put({ type: 'SET_FORM', payload: response.data });
    } catch (error) {
        console.log('Error with getForm:', error);

    }
}



function* deleteForm(action) {
    console.log(action.payload);
    console.log(action.payload.id);
    try {
        const response = yield axios.delete(`/api/form/${action.payload.id}`, action.payload);
        console.log(response);
        yield put({ type: 'GET_FORM', payload: response.data });
    } catch (error) {
        console.log('Error with deleteForm:', error);

    }
}

function* formSaga() {
    yield takeLatest('POST_FORM', postForm);
    yield takeLatest('GET_FORM', getForm);
    yield takeLatest('DELETE_FORM', deleteForm);
    yield takeLatest('UPDATE_FORM', updateForm);

}

export default formSaga;
