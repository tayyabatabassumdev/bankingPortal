import { useSearchParams, Link } from "react-router-dom";
import useAuthForm from "../hooks/useAuthForm";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "signin";
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
  } = useAuthForm(mode);
  const FormComponent = mode === "signin" ? SignInForm : SignUpForm;
  const formProps = {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    ...(mode === "signup" && { name, setName, phone, setPhone }),
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <FormComponent {...formProps} />
        <p className="mt-6 text-center text-sm">
          {mode === "signin"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            to={`/auth?mode=${mode === "signin" ? "signup" : "signin"}`}
            className="text-[#4b6043] font-medium hover:underline"
          >
            {mode === "signin" ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default AuthPage;
