import * as firebase from 'firebase'

// Initialize Firebase

  var config = {
    apiKey: "AIzaSyChKfoyCmH5Ur6lT7x8IftBDH2fpdpInFI",
    authDomain: "coffe-68615.firebaseapp.com",
    databaseURL: "https://coffe-68615.firebaseio.com",
    projectId: "coffe-68615",
    storageBucket: "coffe-68615.appspot.com",
    messagingSenderId: "222744610998"
  };

  firebase.initializeApp(config);

const database = firebase.database();

const platillos = database.ref('alimentos/');
const bebidas = database.ref('bebidas/');

const datos = {platillos, bebidas};

export default datos;