export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const DELETE_ADDRESS = 'DELETE_ADDRESS';

export const setAddressList = (addresses) => ({
    type: SET_ADDRESS_LIST,
    payload: addresses
});

export const addAddress = (address) => ({
    type: ADD_ADDRESS,
    payload: address
});

export const updateAddress = (address) => ({
    type: UPDATE_ADDRESS,
    payload: address
});

export const deleteAddress = (addressId) => ({
    type: DELETE_ADDRESS,
    payload: addressId
});