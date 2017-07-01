import homeTemplate from './home/home.html';
import aboutTemplate from './about/about.html';

const homeRoute = {
    template : homeTemplate,
    controller : 'homeController',
    controllerAs : 'hc'
};

export default function($routeProvider, $locationProvider) {
     $routeProvider
       .when('/', homeRoute)
       .when('/home', homeRoute)
       .when('/about', {
         template : aboutTemplate,
         controller : 'aboutController',
         controllerAs : 'ac'
       })
       .otherwise('/');

       // configure html5 to get links working on jsfiddle
       $locationProvider.html5Mode(true);
 }
