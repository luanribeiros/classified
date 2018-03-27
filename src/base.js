const config = {
  apiKey: "AIzaSyANX58gcaimXSAAUZw4MhX_2AwYbC8-c9o",
  authDomain: "mercadodev-867c6.firebaseapp.com",
  databaseURL: "https://mercadodev-867c6.firebaseio.com",
  projectId: "mercadodev-867c6",
  storageBucket: "gs://mercadodev-867c6.appspot.com",
  messagingSenderId: "797108387050"
};

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base
