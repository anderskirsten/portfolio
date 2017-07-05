(function() {
    function BlogService() {
        var BlogService = {};

        // will interact with database once established

        return BlogService;
    }

    angular
        .module('Portfolio')
        .controller('BlogService', BlogService);
})();
