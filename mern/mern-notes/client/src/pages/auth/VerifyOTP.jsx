import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { SEND_OTP_URL, VERIFY_OTP_URL } from "../../resources/api";
import toast from "react-hot-toast";

const VerifyOTP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleVerifyOTP = async (data) => {
    if (!data.otp) {
      toast.error("OTP field is required");
      return;
    }

    setIsLoading(true);
    try {
      const newData = {
        email: localStorage.getItem("forgotUserEmail"),
        otp: data.otp
      }
      const response = await axios.post(VERIFY_OTP_URL, newData);

      if (response.data.status == true) {
        toast.success(response.data.message)
        navigate('/reset-password')
        return;
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
          <div className="text-center">Verify OTP</div>
        </div>

        <div className="grid items-center mt-5 p-3 rounded max-w-xl bg-amber-400">
          <form onSubmit={handleSubmit(handleVerifyOTP)}>
            <div className="my-3">
              <label className="block">OTP</label>
              <input
                {...register("otp")}
                type="text"
                className="rounded w-full p-3 bg-white"
                placeholder="Enter OTP"
              />
            </div>

            <div className="mt-3">
              {isLoading ? (
                <button
                  className="bg-white/70 px-4 py-2 rounded cursor-not-allowed"
                  disabled
                >
                  
                  Verifying otp...
                </button>
              ) : (
                <button className="bg-white/70 px-4 py-2 rounded cursor-pointer">
                  Verify otp
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
