import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { FirebaseError } from "firebase/app";
import firebaseAuth from "../firebase/firebase.auth";
import { AuthType } from "../@types/auth";

export const AuthContext = createContext<AuthType | undefined>(undefined);

const AuthProvider = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {

  const [pageLoading, setPageLoading] = useState(true);
  const [user, setUser] = useState<User>();

  // Login user
  const login: AuthType['login'] = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
      setUser(res.user);
      setPageLoading(false);
      return { success: true, message: "Successfully logged in." };
    } catch (error: unknown) {
      let errorMessage = "Something went wrong.";
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/invalid-credential') {
          errorMessage = "Invalid email/password";
        }
        else if (error.code === 'auth/network-request-failed') {
          errorMessage = "Check your internet connection."
        }
      }
      return { success: false, message: errorMessage };
    }
  }

  // Create a account -> sign up or register
  const register: AuthType['register'] = async ({ name, email, password }) => {
    try {
      const res = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await updateProfile(res.user, {
        displayName: name
      });
      setUser(res.user);
      setPageLoading(false);
      return { success: true, message: "Successfully created an account." };
    } catch (error: unknown) {
      let errorMessage = "Something went wrong.";
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          errorMessage = "Already has an account with this email.";
        }
        else if (error.code === 'auth/network-request-failed') {
          errorMessage = "Check your internet connection."
        }
      }
      return { success: false, message: errorMessage };
    }
  }

  // Logout
  const logout: AuthType['logout'] = async () => {
    setPageLoading(true);
    await signOut(firebaseAuth);
    setUser(undefined);
    setPageLoading(false);
  }


  // Firebase observer
  useEffect(() => {
    // setPageLoading(true);
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      user && setUser(user);
      setPageLoading(false);
    });
    return unsubscribe;
  }, [])


  const auth: AuthType = {
    user,
    pageLoading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider