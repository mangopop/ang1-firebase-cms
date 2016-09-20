function FireService() {

  // const service = {};

  const service = require('firebase/app');
  
  const config = {
      apiKey: 'AIzaSyC5FO2vRIyGS-Xa2_wx1MkeSJojDgWRwI0',
      authDomain: 'project-1074589130318060157.firebaseapp.com',
      databaseURL: 'https://project-1074589130318060157.firebaseio.com',
      storageBucket: 'project-1074589130318060157.appspot.com'
  };
  service.initializeApp(config);

  return service;
}

export default {
  name: 'FireService',
  fn: FireService
};
