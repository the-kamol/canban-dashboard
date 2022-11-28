import {
  ADD_CARD,
  DELETE_CARD,
  GET_CARDS,
  MOVE_CARD,
  UPDATE_CARD,
} from "./actions";

export const getCards = (payload) => ({
  type: GET_CARDS,
  payload,
});

export const addCard = (payload) => ({
  type: ADD_CARD,
  payload,
});

export const moveCard = (payload) => ({
  type: MOVE_CARD,
  payload,
});

export const updateCard = (payload) => ({
  type: UPDATE_CARD,
  payload,
});

export const deleteCard = (payload) => ({
  type: DELETE_CARD,
  payload,
});

// THUNKS
export const getCardsThunk = () => {
  return (dispatch) => {
    dispatch(getCards());
  };
};

export const addCardThunk = (payload) => {
  return (dispatch) => {
    dispatch(addCard(payload));
  };
};

export const deleteCardThunk = ({ id, row }) => {
  return (dispatch) => {
    dispatch(deleteCard({ id, row }));
  };
};

export const moveCardThunk = (payload) => {
  return (dispatch) => {
    dispatch(moveCard(payload));
  };
};
