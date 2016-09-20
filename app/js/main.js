import angular from 'angular';

// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
//move this to service?
import 'textangular/dist/textAngular-sanitize.min';
// import 'textangular/dist/textAngular-rangy.min';
import 'textAngular';
// import 'textangular/dist/textAngular';//gives TAsetup error
import 'angularfire'; //this is needed after firebase but we can load it here first..
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'textAngular',
  'firebase',
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
