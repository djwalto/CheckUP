import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* addForm(action) {
    try {
        yield axios.post('/api/user/form', action.payload);
        // yield put({
        //     type: 'FETCH_FORM',
        //     payload: response.data
        // });
    } catch (error) {
        console.log('Error with form post:', error);
    }
}

function* formSaga() {
    yield takeLatest('SET_FORM', addForm);
}

export default formSaga;
