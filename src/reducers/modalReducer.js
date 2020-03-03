const initialState = {
  isOpen: false,
}


export default function(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_WINDOW":
      return {
        isOpen: !state.isOpen
      }
    default:
      return state;
  }
}
