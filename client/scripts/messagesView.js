// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$chats.html('');
  },

  render: function(filterRoomname) {
    //clear chat so we don't copy the same messages
    this.$chats.html('');

    if (filterRoomname !== undefined) {
      Messages._data.filter((message) => {
        return message.roomname === filterRoomname ? true : false;
      }).forEach((message) => {
        this.renderMessage(message);
      })
    } else {
      //Render _all_ the messages.
      Messages._data.forEach((message) => {
        this.renderMessage(message);
      })
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let htmlMsg = MessageView.render(message);
    this.$chats.append(htmlMsg);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};