import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the icons
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [emailForReset, setEmailForReset] = useState(""); // New state for email reset
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state to handle button disable and spinner

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", email);
        } else {
          toast.error(response.data.message);
        }
      } else if (currentState === "Forgot Password") {
        // Handle password reset request
        const response = await axios.post(backendUrl + "/api/user/forget", {
          email: emailForReset,
        });
        if (response.data.success) {
          toast.success("Password reset email sent!");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", email);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" && (
        <>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Email"
            required
          />
        </>
      )}
      {currentState === "Forgot Password" ? (
        <input
          onChange={(e) => setEmailForReset(e.target.value)}
          value={emailForReset}
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          required
        />
      ) : currentState !== "Login" ? (
        <>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Name"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Email"
            required
          />
        </>
      ) : null}

      {currentState !== "Forgot Password" && (
        <div className="relative w-full">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"} // Toggle type based on showPassword
            className="w-full px-3 py-2 border border-gray-800 pr-10" // Add padding-right to make space for the icon
            placeholder="Password"
            required
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility} // Toggle password visibility on icon click
          >
            {!showPassword ? (
              <FaEyeSlash size={20} /> // Show eye slash icon if password is visible
            ) : (
              <FaEye size={20} /> // Show eye icon if password is hidden
            )}
          </div>
        </div>
      )}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {currentState !== "Forgot Password" && (
          <p
            onClick={() => setCurrentState("Forgot Password")}
            className="cursor-pointer"
          >
            Forgot your password?
          </p>
        )}
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : currentState === "Forgot Password" ? (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Back to Login
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button
        className={`bg-black text-white font-light px-8 py-2 mt-4 ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : ""
        } flex items-center justify-center`}
        disabled={isLoading} // Disable button when loading
      >
        {isLoading ? (
          <FaSpinner className="animate-spin mr-2" size={20} /> // Show spinner if loading
        ) : null}
        {currentState === "Login"
          ? "Sign In"
          : currentState === "Sign Up"
          ? "Sign Up"
          : "Reset Password"}
      </button>
    </form>
  );
};

export default Login;
