(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '../templates/usernameModal.html',
        backdrop: 'static',
        keyboard: false,
        controller: 'UsernameModalCtrl',
        controllerAs: 'username',
        size: 'sm',
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
