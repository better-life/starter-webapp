(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['$q', 'logger'];

    function Dashboard($q, logger) {

        /*jshint validthis: true */
        var vm = this;

        vm.news = {
            title: 'Marvel Avengers',
            description: 'Marvel Avengers 2 is now in production!'
        };
        vm.title = 'Dashboard';

        activate();

        function activate() {
            //activate code if any like authentication etc
        }

    }
})();
