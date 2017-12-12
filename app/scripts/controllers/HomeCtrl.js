(function() {
  function HomeCtrl(Room, Message, $cookies, $scope, $uibModal, $log, $document) {
    var home = this;
    // links chatRooms object with database reference from Room service
    home.chatRooms = Room.all;

    home.cookies = Room.cookies

    // sets class variable to display messages-container or not
    home.messageFieldClass = Message.messageFieldClass;

    home.messages = '';

    // CALLS MODAL INSTANCE
    home.open = function () {
      var modalInstance = $uibModal.open({
        templateUrl: '../templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal',
        size: 'lg',
      });
    };

    // gets name of active chat room and queries messages associated with activeRoom
    // called when a chatroom is clicked in array of chatroom names in rooms-container
    home.getRoomName = function(roomId) {
      //sets activeRoom as value of element's id that triggered the event, in this case the element is the chat[room] in home.chatRooms. Linked to h1 element in home.html template
      home.activeRoom = event.target.id;
      // calls on function from Message.js
      Message.getRoomById(roomId);
      // sets target Room for sending messages to active room
      home.targetRoom = roomId;
      // sets styles for message input field so they are displayed
      home.messages = Message.activeMessages;
      // removes hidden class from message container
      home.messageFieldClass = '';
    };


    home.submitMessage = function(newMessage) {
      Message.send(home.messageContent);
      document.getElementById('new-message-content').value = '';
    }

    // FUNCTION TO DELETE COOKIES FOR TESTING PURPOSES
    home.deleteCookies = function() {
      $cookies.remove('blocChatCurrentUser');
    }

    home.hideShow = Room.hideShow;

}
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$scope', '$uibModal', '$log', '$document', HomeCtrl]);
})();
