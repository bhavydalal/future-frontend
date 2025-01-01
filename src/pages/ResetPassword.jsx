import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Check password strength before submitting
    const strengthMessage = checkPasswordStrength(newPassword);
    if (strengthMessage.type !== "success") {
      toast[strengthMessage.type](strengthMessage.message);
      return; // Don't proceed if password is not strong
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/user/reset-password",
        {
          token: token,
          newPassword: newPassword,
        }
      );

      if (response.data.success) {
        toast.success("Password reset successfully.");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error resetting password.");
    }
  };

  useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing reset token.");
      navigate("/login");
    }
  }, [token, navigate]);

  // Function to check password strength and return the appropriate message
  const checkPasswordStrength = (password) => {
    const strongPasswordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const mediumPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (strongPasswordPattern.test(password)) {
      return { type: "success", message: "Your password is strong!" };
    } else if (mediumPasswordPattern.test(password)) {
      return {
        type: "info",
        message: "Your password is medium. Consider adding special characters.",
      };
    } else {
      return {
        type: "warn",
        message:
          "Your password is weak. Try using a mix of letters, numbers, and special characters.",
      };
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <h2 className="prata-regular text-3xl mb-2">Reset Password</h2>

      {/* New Password */}
      <div className="relative w-full">
        <input
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800 pr-10"
          placeholder="New Password"
          required
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowNewPassword(!showNewPassword)}
        >
          {!showNewPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </div>
      </div>

      {/* Confirm Password */}
      <div className="relative w-full">
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800 pr-10"
          placeholder="Confirm Password"
          required
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {!showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </div>
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
