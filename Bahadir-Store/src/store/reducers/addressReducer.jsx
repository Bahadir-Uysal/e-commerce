import * as types from '../actions/addressActions';

const initialState = {
    addressList: []
};

export default function addressReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_ADDRESS_LIST:
            return { ...state, addressList: action.payload };
        case types.ADD_ADDRESS:
            return { ...state, addressList: [...state.addressList, action.payload] };
        case types.UPDATE_ADDRESS:
            return {
                ...state,
                addressList: state.addressList.map(addr => 
                    addr.id === action.payload.id ? action.payload : addr
                )
            };
        case types.DELETE_ADDRESS:
            return {
                ...state,
                addressList: state.addressList.filter(addr => addr.id !== action.payload)
            };
        default:
            return state;
    }
}