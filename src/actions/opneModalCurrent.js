const openModalWithCurrentUser = (id) => {
  return {
    type: "TOGGLE_WINDOW",
    payload: id
  }
}


export {
  openModalWithCurrentUser
}