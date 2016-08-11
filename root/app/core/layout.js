var moduleName = 'app.layout';

import navDirective  from './nav/navDirective';

angular.module(moduleName, [])
  .directive('lumxNavbar', navDirective);

export default moduleName;
