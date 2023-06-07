// se importan 2 librerias del firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import initializeApp, es para iniciar la conexion con firebase
//import getFirestore, es utiliza para obtener una instancia en firebase 

//acá está la la key de la api de nuestra base de firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEy1wN17m41lYfe5aiF8IR2sfm8QEMeOI",
    authDomain: "firts-ecommerce.firebaseapp.com",
    projectId: "firts-ecommerce",
    storageBucket: "firts-ecommerce.appspot.com",
    messagingSenderId: "814599521427",
    appId: "1:814599521427:web:84e6f5574ea280bf687966"
};

// Initialize Firebase y se le pasa la configuración como un argumento
const app = initializeApp(firebaseConfig);

// aca estamos exportando la referencia para tenerla siempre disponible en la nuestro desarrollo
export const db_firebase = getFirestore(app);