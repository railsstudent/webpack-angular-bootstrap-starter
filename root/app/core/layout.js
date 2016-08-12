var moduleName = 'app.layout';

import NavDirective  from './nav/navDirective';

angular.module(moduleName, [])
  .directive('lumxNavbar', () => new NavDirective());

export default moduleName;
