'use strict';

angular.module('firstAngularApp').directive('listComp', function(){
    return { 
        restrict:'E',
        templateUrl:'views/directive/list.html',
        scope : {
            name:'<',
            msg: '@',
            newmsg : '=',
            fun:'&'
        },
        link: function(scope, elem , attrs  ) {
            // console.log(' list name :', scope.name);
        } 
    }
});