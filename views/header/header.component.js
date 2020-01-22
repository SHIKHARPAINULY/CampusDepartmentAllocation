'use strict';

angular.module('firstAngularApp').component('headerComp', {
    templateUrl:'views/header/header.component.html',
    controller: function(){
        console.log('reusable component invoked -- header component');
    }


});