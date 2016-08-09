(function () {
    'use strict';

    angular
        .module('app.chat')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'chat/:id',
                config: {
                    url: '/chat/:id',
                    templateUrl: 'app/chat/chat.html',
                    controller: 'ChatController',
                    controllerAs: 'vm',
                    title: 'Chat',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Chat'
                    }
                }
            }
        ];
    }
})();
