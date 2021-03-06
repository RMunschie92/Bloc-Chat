(function() {
  function ModalInstanceCtrl(Room, $scope, $uibModalInstance, $log, $document) {
    var modal = this;

    this.save = function() {
      $uibModalInstance.close(Room.add());
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['Room', '$scope', '$uibModalInstance', '$log', '$document', ModalInstanceCtrl]);
})();
