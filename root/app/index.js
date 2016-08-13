'use strict';

/* import angular route */
import ngRoute from 'angular-route';

/* import controller and service */
import { default as controllersModuleName } from './core/controllers';
import { default as servicesModuleName } from './core/services';
import { default as routing } from './core/routeConfig';

module.exports = angular.module('app', [
  ngRoute, controllersModuleName, servicesModuleName])
   .config(routing); 
console.log('environment: ' + process.env.NODE_ENV);
