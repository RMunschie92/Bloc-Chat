(function() {
  function UsernameModalCtrl(Room, $cookies, $scope, $uibModalInstance, $log, $document) {
    var username = this;

    username.cookies = Room.cookies;

    username.setCookie = function(val) {
      $cookies.put('blocChatCurrentUser', val);
      $uibModalInstance.close();
    }

    if (document.getElementById('newUsername' != null)) {
      username.nameInput = document.getElementById('newUsername').value;
    }

    username.checkForm = function() {
      username.nameInput = document.getElementById('newUsername').value;
      if (username.nameInput == '') {
        alert('Please enter a username');
      }
      else {
      username.nameInput = document.getElementById('newUsername').value;
      username.setCookie(username.nameInput);
      location.reload();
      }
    }

  }
  angular
    .module('blocChat')
    .controller('UsernameModalCtrl', ['Room', '$cookies', '$scope', '$uibModalInstance', '$log', '$document', UsernameModalCtrl]);
})();
