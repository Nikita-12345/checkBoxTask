import {ADD_LIST, REMOVEFROM_LIST} from './constants';

export const addItemList = (labelHeading,data,value, flagValue) =>{
    return {
        type : ADD_LIST,
        payload : {labelHeading, data, value, flagValue}
    }
}

export const removeItemList = (labelHeading,data,value, flagValue) =>{
    return {
        type : REMOVEFROM_LIST,
        payload : {labelHeading, data, value, flagValue}
    }
}
