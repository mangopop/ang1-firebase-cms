function TinyService() {
  
  //https://github.com/tinymce/tinymce/issues/2836

  const service = require('tinymce/tinymce'); //not sure if this is actually supported

  return service;
}

export default {
  name: 'TinyService',
  fn: TinyService
};