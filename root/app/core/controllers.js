import AboutController from './about/AboutController';
import HomeController from './home/HomeController';

const moduleName = 'starter.controllers';
angular.module(moduleName, [])
  .controller('aboutController', AboutController)
  .controller('homeController', HomeController);

export default moduleName;
