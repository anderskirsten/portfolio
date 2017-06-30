(function() {
    function ModalCtrl($uibModal, $uibModalInstance) {
      var modal = this;

      // opens demo_coming_soon modal
      modal.openDemoMsg = function() {
        $uibModal.open({
        templateUrl: '../templates/modals/demo_coming_soon.modal.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
        });
      };

      modal.cancel = function () {
        $uibModalInstance.dismiss();
      };

    }

    angular
        .module('portfolio')
        .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', ModalCtrl]);
})();
