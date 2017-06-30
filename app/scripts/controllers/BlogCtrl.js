(function() {
    function BlogCtrl($uibModal) {
      var blog = this;

      // opens blog modal
      blog.openBlogModal = function() {
        console.log("someone is reading your blog");

        $uibModal.open({
        templateUrl: '../templates/modals/blog.modal.html',
        size: 'lg',
        controller: 'ModalCtrl as modal'
        });
      };


    }

    angular
        .module('portfolio')
        .controller('BlogCtrl', ['$uibModal', BlogCtrl]);
})();
