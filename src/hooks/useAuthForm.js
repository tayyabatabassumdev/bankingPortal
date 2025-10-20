import { useState } from "react";
import { useBankStore } from "../store/bankStore";
import { useNavigate } from "react-router-dom";
const useAuthForm = (mode) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, signUp } = useBankStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (mode === "signin") {
      const success = signIn(email, password);
      if (success) {
        navigate("/dashboard", { replace: true });
      } else {
        setError("Invalid credentials.");
      }
    } else {
      const newUser = { name, phone, email, password, balance: 1000.0 };
      const result=signUp(newUser);
      if(result){alert("Sign Up successful! Redirecting to Sign In.");
      navigate("/auth?mode=signin", { replace: true });}
    }
  };
  return {
    name, setName,
    phone, setPhone,
    email, setEmail,
    password, setPassword,
    error, setError, 
    handleSubmit,
  };
};

export default useAuthForm;