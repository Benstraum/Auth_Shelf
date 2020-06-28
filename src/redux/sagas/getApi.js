import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getTheApi() {
    try {
        const responsePayload = yield axios.get(`https://www.dnd5eapi.co/api/equipment`);
        yield put({ type: 'SET_EQUIP' , payload: responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getApi() {
    yield takeEvery('GET_ITEMS', getTheApi);
}

export default getApi;