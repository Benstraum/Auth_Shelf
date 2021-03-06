import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItem(action) {
    try {
        yield axios.delete(`/api/shelf/${action.payload}`);
        yield put({ type: 'FETCH_ITEMS' });
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE', deleteItem);
}

export default deleteSaga;