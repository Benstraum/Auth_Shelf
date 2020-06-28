import { combineReducers } from 'redux';
const getListReducer = (state = [], action) => {
    console.log('in getListReducer', action.payload);
    console.log('heres this type', action.type);

    if (action.type === 'SET_LIST') {
        return action.payload;
    }
    return state;
};
const getItemReducer = (state=[], action) =>{
    if(action.type === 'SET_EQUIP'){
        return action.payload.data.results
    }
    return state
}

export default combineReducers({
    getListReducer,
    getItemReducer
})