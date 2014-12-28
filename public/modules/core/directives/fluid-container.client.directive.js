'use strict';

angular.module('core').directive('fluidContainer', [
	'$window',
	function($window) {
		return {
			template: '<div class="container" ng-transclude></div>',
			restrict: 'EA',
			transclude: true,
			replace: true,
			link: function postLink(scope, element, attrs) {
				var setFluidHeight = function(){
					var totalHeight = 0;
					element.find('div').each(function(){
						if(!this.hasAttribute('fluid')){
							totalHeight += $(this).height();
						}
					});

					element.find('[fluid]').height(element.height() - totalHeight);
				};

				angular.element($window).on('resize', function () {
					setFluidHeight();
				});

				setFluidHeight();
			}
		};
	}
]);
