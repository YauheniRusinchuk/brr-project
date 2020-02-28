const initialState = {
  contacts: [
    {id: 1, firstName: "Eugene", lastName: "Rusinchuk", active: false},
    {id: 2, firstName: "James", lastName: "Boxtel", active: true},
    {id: 3, firstName: "Aron", lastName: "Shulch", active: true},
    {id: 4, firstName: "Eugene", lastName: "Rusinchuk", active: false},
    {id: 5, firstName: "Eugene", lastName: "Rusinchuk", active: false},
    {id: 6, firstName: "Aron", lastName: "Shulch", active: true},
    {id: 7, firstName: "Eugene", lastName: "Rusinchuk", active: false},
    {id: 8, firstName: "Eugene", lastName: "Rusinchuk", active: false},
    {id: 9, firstName: "Eugene", lastName: "Rusinchuk", active: false},
    {id: 10, firstName: "Eugene", lastName: "Rusinchuk", active: false},
  ],

  currentChat: {id: 1, firstName: "Eugene", lastName: "Rusinchuk", active: false},

}


export default function(state = initialState, action) {
  switch (action.type) {
    case "LOAD_CONTACTS":
      return state;
    case "CURRENTCHAT_ACTION":
      const current = state.contacts.find(item => item.id === action.payload)
      return {
        ...state,
        currentChat: current
      }  
    default:
      return state;
  }
}