'use strict';

/**
 * Created by thekoder on 12/25/14.
 */
angular.module('core').service('Navigation', [

    function() {
        this.navState = 'slide-middle';

        this.getCurrentNavState = function(){
          return this.navState;
        };

        this.setCurrentNavState = function(navState){
            this.navState = navState;
        };

        this.slideLeft = function(){
            this.navState = 'slide-left';
        };

        this.slideRight = function(){
            this.navState = 'slide-right';
        };

        this.slideMiddle = function(){
            this.navState = 'slide-middle';
        };

        return this;
    }
]);
