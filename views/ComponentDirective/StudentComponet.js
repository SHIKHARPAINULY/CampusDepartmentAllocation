'use strict';

angular.module('firstAngularApp')
.component('studentList', {
    templateUrl : 'views/ComponentDirective/student.component.html',
    controller: function ( $scope){
        $scope.students = [ 'Jonathan', 'Nathan', 'Chris', 'Brian', 'Timothy', 'Brandy' , 'Aaron', 'Jack' , 'Kate' , 'Deshmond' , 'Hurlley' , 'Charlie' , 'Walt', 'Tony' ];
    }
});