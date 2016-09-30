/*
prefix for authorization code on request
storagename to functions with angular2-jwt
*/

export const tokenConfig = {
  _prefix: 'Bearer',
  localStorageName: 'profile',
  headerName: 'Authorization'
  //Todo...
};
