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
    '>': '&gt;',
    '"': '&quot',
    '`': '&#96',
    '\'': '&#x27'
  };
  return this.replace(/[&<>]/g, function(tag) {
    return tagsToReplace[tag] || tag;
  });
};