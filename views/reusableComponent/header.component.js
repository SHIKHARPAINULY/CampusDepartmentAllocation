'use strict';

angular.module('firstAngularApp').component('headerComp', {
    templateUrl:'views/reusableComponent/header.component.html',
    controller: function(){
        console.log('reusable component invoked -- header component');
    }


});