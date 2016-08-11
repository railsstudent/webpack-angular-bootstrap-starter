
import NavCtrl from './nav';

export default () => {
  require('./nav.scss');  // load styles for the component
  return {
    controller: NavCtrl,
    controllerAs: 'nav',
    template : require('./nav.html')
  };
};
