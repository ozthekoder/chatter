'use strict';

angular.module('core').controller('LeftController', ['$scope', 'Authentication', 'Navigation',
    function($scope, Authentication, Menus) {
        $scope.authentication = Authentication;

        $scope.$on('$stateChangeSuccess', function() {
        });
    }
]);
