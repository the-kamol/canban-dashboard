import { omit } from "lodash";
import { combineReducers } from "redux";
import { ADD_CARD, DELETE_CARD, GET_CARDS, MOVE_CARD } from "./actions";

const initialState = {
  cards: {
    1: { text: "Check email", id: 1, color: "#ABE9CE", time: "3:0h" },
    2: { text: "Add email", id: 2, color: "#FFDFBA", time: "3:0h" },
    3: { text: "Get email", id: 3, color: "#FEC6B7", time: "0:5h" },
    4: { text: "Support", id: 4, color: "#F2BAE1", time: "3:0h" },
    5: { text: "Dragon", id: 5, color: "#ABE9CE", time: "0:5h" },
    6: { text: "Test creat", id: 6, color: "#D8DCFF", time: "3:0h" },
    7: { text: "Great king", id: 7, color: "#ABE9CE", time: "0:5h" },
    8: { text: "On board", id: 8, color: "#FEC6B7", time: "0:5h" },
    9: { text: "On change", id: 9, color: "#D8DCFF", time: "3:0h" },
  },
  rows: {
    0: {
      id: "0",
      title: "New tasks",
      cards_ids: [7, 5],
    },
    1: {
      id: "1",
      title: "Sheduled",
      cards_ids: [9],
    },
    2: {
      id: "2",
      title: "In Progress",
      cards_ids: [1, 2, 3, 4],
    },
    3: {
      id: "3",
      title: "Completed",
      cards_ids: [6, 8],
    },
  },
};

const cards = (state = initialState.cards, action) => {
  switch (action.type) {
    case GET_CARDS: {
      const cards = {};
      action.payload.forEach((card) => {
        cards[card.id] = omit(card, ["seq_num"]);
      });
      return cards;
    }
    case ADD_CARD:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_CARD:
      return omit(state, [action.payload.id]);
    case MOVE_CARD:
      const payload = action.payload;
      return {
        ...state,
        [payload.draggableId]: {
          ...state[payload.draggableId],
          row: payload.destination.droppableId,
        },
      };
    default:
      return state;
  }
};

const rows = (state = initialState.rows, action) => {
  switch (action.type) {
    case GET_CARDS:
      const newState = { ...state };
      action.payload.forEach((card) => {
        newState[card.row].cards_ids.splice(card.seq_num, 0, card.id);
      });
      return newState;

    case MOVE_CARD:
      const { destination, source } = action.payload;
      const draggableId = Number(action.payload.draggableId);

      if (source.droppableId === destination.droppableId) {
        const ids = [...state[destination.droppableId].cards_ids];
        ids.splice(source.index, 1);
        ids.splice(destination.index, 0, draggableId);

        return {
          ...state,
          [destination.droppableId]: {
            ...state[destination.droppableId],
            cards_ids: ids,
          },
        };
      } else {
        const sourceIds = [...state[source.droppableId].cards_ids];
        const destinationIds = [...state[destination.droppableId].cards_ids];
        sourceIds.splice(source.index, 1);
        destinationIds.splice(destination.index, 0, draggableId);

        return {
          ...state,
          [source.droppableId]: {
            ...state[source.droppableId],
            cards_ids: sourceIds,
          },
          [destination.droppableId]: {
            ...state[destination.droppableId],
            cards_ids: destinationIds,
          },
        };
      }
    default:
      return state;
  }
};

export default combineReducers({
  cards,
  rows,
});
