export default function($routeProvider, $locationProvider) {
     $routeProvider
       .when('/', {
           template : require('./home/home.html'),
           controller : 'homeController',
           controllerAs : 'hc'
       })
       .when('/home', {
         template : require('./home/home.html'),
         controller : 'homeController',
         controllerAs : 'hc'
       })
       .when('/about', {
         template : require('./about/about.html'),
         controller : 'aboutController',
         controllerAs : 'ac'
       })
       .otherwise('/');

       // configure html5 to get links working on jsfiddle
       $locationProvider.html5Mode(true);
 }
