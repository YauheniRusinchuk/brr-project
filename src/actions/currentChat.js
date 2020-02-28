
const currentChatAction = (id) => {
  return {
    type: "CURRENTCHAT_ACTION",
    payload: id
  }
}


export {
  currentChatAction
}
