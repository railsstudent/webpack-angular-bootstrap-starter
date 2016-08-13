import HomeService from './home/HomeService';

const moduleName = 'starter.services';
angular.module(moduleName, [])
  .factory('HomeService', HomeService.homeFactory);

export default moduleName;
