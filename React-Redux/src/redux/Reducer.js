import {BUY_ICE_CREAM, BUY_CAKE, ADD_CAKE, ADD_ICE_CREAM} from "./ActionTypes";
import {combineReducers} from "redux";

export const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
};


export default function rootReducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case BUY_CAKE:
            let nextCountCake = state.numOfCakes - payload;
            if(nextCountCake < 0) nextCountCake = 0;
            return {
                ...state,
                numOfCakes: state.numOfCakes - payload
            };
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - payload
            };
        case ADD_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + payload
            };
        case ADD_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + payload
            };
        default:
            return state;
    }
}

const initialCakeState = {
    numOfCakes: 5
};

const cakeReducer = (state=initialCakeState, action) => {
    if(action.type === BUY_CAKE){
        return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        };
    }
    else return state;
};

const initialIceCreamState = {
    numOfIceCreams: 11
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    if(action.type === BUY_ICE_CREAM)
        return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        };
    else return state;
};

export const combinedReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

