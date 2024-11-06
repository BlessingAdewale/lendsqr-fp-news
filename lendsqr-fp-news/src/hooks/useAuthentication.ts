// import React from 'react';

// //firebase
// import { onAuthStateChanged, User } from 'firebase/auth';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
// import app from '../config/firebase';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// //redux
// import { login, logout, selectUser } from '../redux/slices/userSlice';
// import { useDispatch, useSelector } from 'react-redux';

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export function useAuthentication() {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();
//   // check at page load if a user is authenticated
//   React.useEffect(() => {
//     const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User

//         // user is logged in, send the user's details to redux, store the current user in the state
//         dispatch(
//           login({
//             email: user.email,
//             uid: user.uid,
//             displayName: user.displayName,
//             photoUrl: user.photoURL,
//           }),
//         );
//       } else {
//         // User is signed out
//         dispatch(logout());
//       }
//     });

//     return unsubscribeFromAuthStatuChanged;
//   }, []);

//   return {
//     user,
//   };
// }
