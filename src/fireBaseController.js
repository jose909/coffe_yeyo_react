import * as firebase from 'firebase'

// Initialize Firebase

   var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

  firebase.initializeApp(config);

const database = firebase.database();

const platillos = database.ref('alimentos/');
const bebidas = database.ref('bebidas/');

const datos = {platillos, bebidas};

export default datos;