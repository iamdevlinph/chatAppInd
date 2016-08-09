(function () {
    'use strict';

    angular
        .module('app.chat')
        .controller('ChatController', ChatController);

    ChatController.$inject = ['logger'];
    /* @ngInject */
    function ChatController(logger, $stateParams, $location) {
        var vm = this;
        vm.title = 'Chat';

        activate();

        function activate() { }
    }
})();
