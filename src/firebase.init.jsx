import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBBYsqdSHWRyRpI_JHaJojvdDWRs2PgT2Q",
  authDomain: "dream-photography-app.firebaseapp.com",
  projectId: "dream-photography-app",
  storageBucket: "dream-photography-app.appspot.com",
  messagingSenderId: "881255346802",
  appId: "1:881255346802:web:37ffc2204e46d4b662c8eb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
