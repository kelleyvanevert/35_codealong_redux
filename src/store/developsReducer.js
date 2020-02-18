const initialState = [];

export default function developersReducer(state = initialState, action) {
  console.log("dev reducer just received an action", action);
  switch (action.type) {
    case "FETCHED_DEVELOPERS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
