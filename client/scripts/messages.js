var Messages = {
  storage: [],




};









// store messages that we have pulled down from the server using the readall func from parse.js
// then we will call the messageView render function on each message (probably actually do this in messagesView.js)
// then messagesView.js will render all of the messages that have been turned into appropriate DOM templates above
// messagesView after rendering will clear messages storage