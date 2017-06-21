(function() {
    function ProjectCtrl($uibModal) {
      var projects = this;

      // opens musicology project modal
      projects.openMusicApp = function() {
        console.log("the learn more button has been clicked");

        $uibModal.open({
        templateUrl: '../templates/musicology.modal.html',
        size: 'lg',
        controller: 'ModalCtrl as modal'
        });
      };

      // opens letterkenny chat project modal
      projects.openChatApp = function() {
        console.log("the learn more button has been clicked");

        $uibModal.open({
        templateUrl: '../templates/lk_chat.modal.html',
        size: 'lg',
        controller: 'ModalCtrl as modal'
        });
      };

      // opens letterkenny chat project modal
      projects.openPortfolio = function() {
        console.log("the learn more button has been clicked");

        $uibModal.open({
        templateUrl: '../templates/portfolio.modal.html',
        size: 'lg',
        controller: 'ModalCtrl as modal'
        });
      };

    }

    angular
        .module('portfolio')
        .controller('ProjectCtrl', ['$uibModal', ProjectCtrl]);
})();
