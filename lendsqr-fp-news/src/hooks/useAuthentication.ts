import React from 'react';

//firebase
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import app from '../config/firebase';

//redux
import { login, logout, selectUser } from '../state/features/user';
import { useAppDispatch, useAppSelector } from '@state';

const auth = getAuth(app);

export function useAuthentication() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  // check at page load if a user is authenticated
  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          }),
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user,
  };
}

