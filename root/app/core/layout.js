var moduleName = 'app.layout';

import { default as navDirective } from './nav/navDirective';

angular.module(moduleName, [])
  .directive('lumxNavbar', navDirective);

export default moduleName;
