(function () {
    'use strict';
    
    function UsersChatController($location) {
        var vm = this;
        vm.title = 'Users';
        vm.switchUser = switchUser;
        vm.users = [
            { id: 1, name: 'Angelo Jose', status: 'Online', photo: 'http://bootdey.com/img/Content/user_1.jpg' },
            { id: 2, name: 'Beatrice Rizal', status: 'Offline', photo: 'http://bootdey.com/img/Content/user_2.jpg' },
            { id: 3, name: 'Charles Tan', status: 'Online', photo: 'http://bootdey.com/img/Content/user_3.jpg' },
        ];

        function switchUser(id) {
            $location.path('/chat/' + id);
        }

    }

    angular
        .module('app.widgets')
        .component('chatUsers', {
            bindings: {
                ngModel: '=',
            },
            templateUrl: 'app/widgets/users/chat-users.html',
            controller: UsersChatController,
            controllerAs: 'vm',
        });
})();
