var MessagesView = {
  // ultimately used to display messages to user

  $chats: $('#chats'),

  initialize: function() {
    App.fetch(App.stopSpinner);
  },

  renderMessage: function(message) {
    var htmlMessage = MessageView.render(message);
    MessagesView.$chats.append(htmlMessage);
  }

  //add a friend function here

};

