'use strict';

angular.module('firstAngularApp').directive('studentList', function(){
    return { 
        restrict:'E',
        templateUrl:'views/1.6/student-list/student-list.html',
        scope : {
            selectdeptt: '<'
        },
        link: function(scope, elem , attrs  ) {
            if(attrs.selectdeptt.length > 0 ){
                scope.val = attrs.selectdeptt;
            }
            // if($rootScope.department.length > 0 ){
            //     scope.val = $rootScope.department;
            // }
            scope.students = [ 
                {name:'Brandy',department:'COMPUTER'},
                {name:'Aaron',department:'MECHANICAL'},
                {name:'Jack',department:'ELECTRICAL'},
                {name:'Kate',department:'CIVIL'},
                {name:'Deshmond',department:'MECHANICAL'},
                {name:'Hurlley',department:'CIVIL'},
                {name:'Charlie',department:'ELECTRICAL'},
                {name:'Walt',department:'COMPUTER'},
                {name:'Tony',department:'COMPUTER'},
            ];
           if(scope.val != undefined && scope.val.length > 0 ) { 
            scope.Shortedstudents = scope.students.filter(ele => ele.department ==scope.val );
            $("#trigger").click(); 
            }
        } 
    }
});