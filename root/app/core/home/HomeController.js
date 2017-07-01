'use strict';

let HomeService, $timeout;
class HomeController {

  constructor(_HomeService, _$timeout) {
    HomeService = _HomeService;
    $timeout = _$timeout;

    this.init();
    this.loadData();
  }

  init() {
    this.technologies = [];
    this.loaders = [];
  }

  loadData() {
    return Promise.all([ HomeService.getTechnologies(), HomeService.getLoaders() ])
            .then(vals =>
              $timeout(() => {
                this.technologies = vals[0];
                this.loaders = vals[1];
              })
            )
            .catch(ex => console.error(ex));
  }
}
HomeController.$inject = [ 'HomeService', '$timeout'];

export { HomeController };
