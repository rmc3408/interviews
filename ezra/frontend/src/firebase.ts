import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxUzqQi--LWmy7U5dSDzMHwARGsrdAffE',
  authDomain: 'answerai-64e1a.firebaseapp.com',
  projectId: 'answerai-64e1a',
  storageBucket: 'answerai-64e1a.firebasestorage.app',
  messagingSenderId: '878170771413',
  appId: '1:878170771413:web:b197ddc834b02f418c775c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
