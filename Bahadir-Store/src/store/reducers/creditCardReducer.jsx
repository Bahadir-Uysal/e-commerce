import * as types from '../actions/creditCardActions';

const initialState = {
    creditCards: []
};

export default function creditCardReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_CREDIT_CARDS:
            return {
                ...state,
                creditCards: action.payload
            };
        case types.ADD_CREDIT_CARD:
            return {
                ...state,
                creditCards: [...state.creditCards, action.payload]
            };
        case types.DELETE_CREDIT_CARD:
            return {
                ...state,
                creditCards: state.creditCards.filter(card => card.id !== action.payload)
            };
        default:
            return state;
    }
}