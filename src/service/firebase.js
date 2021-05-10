// firebase 전체를 쓸데없이 다 불러오기보다 필요한것만 가져와서 사용하기!
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export default firebaseApp; 전체를 사용하기 보다,
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
// 파이어베이스 앱안에 앱을 사용하고 있는데 거기에는 auth서비스가 존재하지 않아서 여기서 따로 export 해준다!
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
