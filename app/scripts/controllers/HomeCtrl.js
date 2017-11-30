(function() {
  function HomeCtrl(Room, $scope, $uibModal, $log, $document) {
    var home = this;

    home.chatRooms = Room.all;
    //TO TEST ADD METHOD FROM ROOM.JS
    // this.addRoom = Room.add();

    home.open = function () {
      modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        templateUrl: '../templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal',
        bindToContoller: true,
        scope: $scope,
        size: 'lg',
        resolve: {
          '$modalInstance': function () { return function () { return modalInstance; } }
        }
      });


    console.log(modalInstance);

    modalInstance.result.then(function (newChatRoom) {
      home.selected = newChatRoom;
      console.log(newChatRoom);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', '$uibModal', '$log', '$document', HomeCtrl]);
})();
