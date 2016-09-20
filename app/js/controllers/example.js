function ExampleCtrl($firebaseArray,FireService) {
  'ngInject';

  require('tinymce/tinymce');
  // require('tinymce/themes/modern/theme');
  // require('tinymce/plugins/paste/plugin');
  // require('tinymce/plugins/link/plugin');
  // require('tinymce/plugins/autoresize/plugin');

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

  var ref = FireService.database().ref();
  var qualityRef = ref.child('roles'); 
  vm.quality = $firebaseArray(qualityRef);

  vm.htmlVariable = 'simon';

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
