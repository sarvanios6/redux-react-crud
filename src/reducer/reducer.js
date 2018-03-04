import {combineReducers} from 'redux'

export function manipulateData(state = {
    cardData: [],
    cardEditData: '',
}, action) {
    switch (action.type) {
        case "ADD_CARD_DATA": {
            return {
                ...state,
                cardData: [...state.cardData, action.payLoad]
            }
        }
        case "UPDATE_CARD_DATA": {
            let data = state.cardData.filter(item => item.cardNumber !== action.payLoad.cardNumber);
            data.push(action.payLoad);
            return {
                ...state,
                cardEditData: '',
                cardData: data
            }
        }
        case "EDIT_CARD_DATA": {
            let data = state.cardData.filter(item => item.cardNumber === action.payLoad);
            return {
                ...state,
                cardEditData: data,
            }
        }
        case "DELETE_CARD_DATA": {
            let data = state.cardData.filter(item => item.cardNumber !== action.payLoad);
            return {
                ...state,
                cardData: data
            }
        }
        default:
            return state;
    }

}


const rootReducer = combineReducers({
    manipulateData,
});

export default rootReducer