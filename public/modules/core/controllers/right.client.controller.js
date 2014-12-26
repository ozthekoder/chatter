'use strict';

angular.module('core').controller('RightController', ['$scope', 'Authentication', 'Navigation',
    function($scope, Authentication, Menus) {
        $scope.authentication = Authentication;

        $scope.$on('$stateChangeSuccess', function() {
        });
    }
]);
