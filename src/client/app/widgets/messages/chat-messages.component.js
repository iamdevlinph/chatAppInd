(function () {
    'use strict';
    
    function MessagesChatController($stateParams) {
        var vm = this;
        vm.userID = $stateParams.id;
        vm.sendMessage = sendMessage;
        vm.keyPress = keyPress;
        vm.replyOrNot = replyOrNot;
        vm.users = {
            1: [
                { name: 'Angelo Jose', photo: 'http://bootdey.com/img/Content/user_1.jpg' },
            ],
            2: [
                { name: 'Beatrice Rizal', photo: 'http://bootdey.com/img/Content/user_2.jpg' },
            ],
            3: [
                { name: 'Charles Tan', photo: 'http://bootdey.com/img/Content/user_3.jpg' },
            ]
        };
        vm.currentChatMate = vm.users[vm.userID][0];
        vm.messages = {
            1: [
                { message: 'Hi A', type: 'sent' },
                { message: 'Hi Devlin From A', type: 'received' }
            ],
            2: [
                { message: 'Hi B', type: 'sent' },
                { message: 'Hi Devlin From B', type: 'received' }
            ],
            3: [
                { message: 'Hi C', type: 'sent' },
                { message: 'Hi Devlin From C', type: 'received' }
            ]
        };

        function sendMessage() {
            vm.messages[vm.userID].push({ message: vm.messageToSend, type: 'sent' });
            vm.messageToSend = '';
            replyOrNot();
        }

        function keyPress($event) {
            if ($event.which === 13) {
                sendMessage();
                $event.preventDefault();
                return;
            } else {
                return;
            }
        }

        function replyOrNot() {
            var idx = Math.floor(Math.random() * 10) + 1 ;
            if (idx > 5) {
                receiveReply();
            }
        }

        function receiveReply() {
            vm.messages[vm.userID].push({ message: 'Reply from me', type: 'received' });
        }
    }

    angular
        .module('app.widgets')
        .component('chatMessages', {
            bindings: {
                ngModel: '=',
            },
            templateUrl: 'app/widgets/messages/chat-messages.html',
            controller: MessagesChatController,
            controllerAs: 'vm',
        });
})();
