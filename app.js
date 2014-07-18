'use strict';
var myapp = angular.module('timeagoApp', ['ngtimeago']);

myapp.controller("LoadDates", ['$scope', function($scope) {

    $scope.dates = [];
  
 
var d = new Date("July 13, 2014 11:13:00");
var oneMinute = removeMinutes(new Date(),1);
alert(oneMinute);
$scope.dates.push(d);
$scope.dates.push(oneMinute);
}]);

function removeMinutes(date, minutes) {
    return new Date(date.getTime() - minutes*60000);
}
