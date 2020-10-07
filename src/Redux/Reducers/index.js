import {ADD_LIST, REMOVEFROM_LIST} from '../Actions/constants';

const initialState = []


export const filteredListReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_LIST :
            let finalErr = {}
            let data = {label : action.payload.data, checked : action.payload.value, labelHeading: action.payload.labelHeading, flagValue: action.payload.flagValue};
            state.push(data);
            finalErr = state.map(state=> state);
            return finalErr;

        case REMOVEFROM_LIST :
            state = state.filter(state=>(state.label !== action.payload.data))
            return state;
        default: return state;
    }
}
