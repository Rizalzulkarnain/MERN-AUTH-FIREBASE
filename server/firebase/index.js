const admin = require('firebase-admin');

const serviceAccount = require('../config/firebaseService.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://authentication-79a73.firebaseio.com',
});

module.exports = admin;
