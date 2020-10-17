var MessagesView = {
  // ultimately used to display messages to user

  $chats: $('#chats'),

  initialize: function() {
    App.fetch(App.stopSpinner);
    Messages.scrubData(Messages.storage);

    Messages.storage.forEach(function(messageObj) {
      MessagesView.renderMessage(messageObj);
    });
  },

  renderMessage: function(message) {
    var displayMessage = MessageView.render(message);
    MessagesView.$chats.append(displayMessage);
  }

  //add a friend function here

};

