export const SET_CREDIT_CARDS = 'SET_CREDIT_CARDS';
export const ADD_CREDIT_CARD = 'ADD_CREDIT_CARD';
export const DELETE_CREDIT_CARD = 'DELETE_CREDIT_CARD';

export const setCreditCards = (cards) => ({
    type: SET_CREDIT_CARDS,
    payload: cards
});

export const addCreditCard = (card) => ({
    type: ADD_CREDIT_CARD,
    payload: card
});

export const deleteCreditCard = (cardId) => ({
    type: DELETE_CREDIT_CARD,
    payload: cardId
});