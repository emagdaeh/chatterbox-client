var MessagesView = {
  // ultimately used to display messages to user

  $chats: $('#chats'),

  initialize: function() {
    setInterval(function() {
      App.fetch(App.stopSpinner);
    }, 10000);
  },

  renderMessage: function(message) {
    var htmlMessage = MessageView.render(message);
    MessagesView.$chats.append(htmlMessage);
  }

  //add a friend function here

};

