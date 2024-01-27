import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function FirebaseConfig(){
    const firebaseConfig = {
        apiKey: "AIzaSyCTRvpq37WBJgjGlvqqWdOvzoGRX-YwysE",
        authDomain: "fir-next-app-d177a.firebaseapp.com",
        databaseURL: "https://fir-next-app-d177a-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "fir-next-app-d177a",
        storageBucket: "fir-next-app-d177a.appspot.com",
        messagingSenderId: "1070537407449",
        appId: "1:1070537407449:web:77c94b8f2988d1bf76f7c8"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      return getDatabase(app)
}
export default FirebaseConfig;
