import { default as layoutModule } from './core/layout';

module.exports = angular.module('app', [
      /* 3rd party */
      'lumx',
      /* JS */
      layoutModule
]);

console.log('environment: ' + process.env.NODE_ENV);
