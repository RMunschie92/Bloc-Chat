(function() {
  function HomeCtrl(Room, Message, $scope, $uibModal, $log, $document) {
    var home = this;
    // links chatRooms object with database reference from Room service
    home.chatRooms = Room.all;

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
    home.getRoomName = function(roomId) {
      //sets activeRoom as value of element's id that triggered the event, in this case the element is the chat[room] in home.chatRooms. Linked to h1 element in home.html template
      home.activeRoom = event.target.id;
      // calls on function from Message.js
      Message.getRoomById(roomId);
      home.messages = Message.activeMessages;
      console.log(home.messages);
    };



}
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', '$uibModal', '$log', '$document', HomeCtrl]);
})();
