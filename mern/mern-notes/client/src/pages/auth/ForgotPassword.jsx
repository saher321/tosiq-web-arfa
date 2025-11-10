import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { SEND_OTP_URL } from "../../resources/api";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleForgotPassword = async (data) => {
    if (!data.email) {
      toast.error("Email field is required");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(SEND_OTP_URL, data);

      if (response.data.status == true) {
        toast.success(response.data.message)
        localStorage.setItem("forgotUserEmail", data.email)
        navigate('/verify-otp')
      } else {
        toast.error(response.data.message)
        return;
      }
      
    } catch (error) {
      toast.error("Somthing went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="text-center">Forgot Password</div>
        </div>

        <div className="grid items-center mt-5 p-3 rounded max-w-xl bg-amber-400">
          <form onSubmit={handleSubmit(handleForgotPassword)}>
            <div className="my-3">
              <label className="block">Email</label>
              <input
                {...register("email")}
                type="email"
                className="rounded w-full p-3 bg-white"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-3">
              {isLoading ? (
                <button
                  className="bg-white/70 px-4 py-2 rounded cursor-not-allowed"
                  disabled
                >
                  OTP is sending please wait...
                </button>
              ) : (
                <button className="bg-white/70 px-4 py-2 rounded cursor-pointer">
                  Send OTP
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
