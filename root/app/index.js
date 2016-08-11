import { default as layoutModule } from './core/layout';

module.exports = angular.module('app', [
      /* 3rd party */
      'lumx',
      /* JS */
      layoutModule
]);

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
