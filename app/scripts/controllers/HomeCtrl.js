(function() {
  function HomeCtrl(Room, $scope, $uibModal, $log, $document) {
    var home = this;

    // home.newRoomName = '';

    home.chatRooms = Room.all;
    //TO TEST ADD METHOD FROM ROOM.JS
    // this.addRoom = Room.add();

    home.open = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        templateUrl: '../templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal',
        scope: $scope,
        size: 'lg',
      });
  };
}

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', '$uibModal', '$log', '$document', HomeCtrl]);
})();
