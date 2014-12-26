'use strict';

angular.module('core').controller('CoreController', ['$scope','$window', 'Authentication', 'Navigation',
    function($scope, $window, Authentication, Navigation) {

        $scope.navigation = Navigation;

        angular.element($window).bind('resize', function(){
            $scope.$apply(function(){
                $scope.navigation.slideMiddle();
            });
        });

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function() {
            $scope.navigation.slideMiddle();
        });
    }
]);
