import React from 'react';
import { auth, provider } from '../firebase'; 
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';

const GoogleSignUp = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
      };

      const response = await axios.post('http://localhost:3001/api/auth/google', userData);
      console.log(response.data);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>
      Sign in with Google
    </button>
  );
};

export default GoogleSignUp;
