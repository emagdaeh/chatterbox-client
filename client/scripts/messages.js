var Messages = {
  storage: [],

  escapeObj: function(obj) {
    if (obj.username) {
      obj.username = obj.username.escape();
    }
    if (obj.text) {
      obj.text = obj.text.escape();
    }
    if (obj.roomname) {
      obj.roomname = obj.roomname.escape();
    }
  },

  scrubData: function(data) {
    data.forEach(function(obj) {
      Messages.escapeObj(obj);
    });
  }

};

// function to handle characters we need to escape
String.prototype.escape = function() {
  var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };
  return this.replace(/[&<>]/g, function(tag) {
    return tagsToReplace[tag] || tag;
  });
};





// store messages that we have pulled down from the server using the readall func from parse.js
// then we will call the messageView render function on each message (probably actually do this in messagesView.js)
// then messagesView.js will render all of the messages that have been turned into appropriate DOM templates above
// messagesView after rendering will clear messages storage