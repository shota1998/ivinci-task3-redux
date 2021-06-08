import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

const initialState = {
  items: [
    {
      id: 0,
      title: "sampleTitle0",
      value: 3.0,
      description: "sampleDescription0",
      quantity: 0,
    },
    {
      id: 1,
      title: "sampleTitle1",
      value: 5.0,
      description: "sampleDescription1",
      quantity: 0,
    },
  ],
  total: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const id = action.payload;
      var cpItems = state.items;
      var cpTotal = state.total;
      cpItems[id].quantity++;
      cpTotal++;

      return {
        ...state,
        items: cpItems,
        total: cpTotal,
      };
    }
    case REMOVE_ITEM: {
      const id = action.payload;
      var cpItems = state.items;
      var cpTotal = state.total;

      if (cpItems[id].quantity !== 0) {
        cpItems[id].quantity--;
        cpTotal--;
      }

      return {
        ...state,
        items: cpItems,
        total: cpTotal,
      };
    }
    default:
      return state;
  }
}
