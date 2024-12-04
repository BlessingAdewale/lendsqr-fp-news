import { initializeApp, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
  GoogleAuthProvider,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.extra?.firebaseApiKey,
  authDomain: Constants.extra?.firebaseAuthDomain,
  projectId: Constants.extra?.firebaseProjectId,
  storageBucket: Constants.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.extra?.firebaseMessagingSenderId,
  appId: Constants.extra?.firebaseAppId,
  measurementId: Constants.extra?.firebaseMeasurementId,
};



const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app)

export { app, auth};
