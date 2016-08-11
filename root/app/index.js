const angularApp = angular.module('app', [
  require('angular-route'),require('angular-messages')])
      .config(function($routeProvider) {
          $routeProvider.otherwise('/');
      });

module.exports = angularApp;

// default params
function printMessage (status = 'working') {
  // let
  let message = 'ES5/6/7';
  let message2 = 'i wish i know what it am doing';
  // template string
  console.log (`${message} is ${status}`);
  console.log(`${message2}`);
}

printMessage();
