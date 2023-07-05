import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        window.location.href = 'dashboard';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateForm = () => {
    const errors: { email: string; password: string } = { email: '', password: '' };
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password should be at least 6 characters";
    }

    return errors;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    signUp,
    signIn,
    validateForm
  };
};