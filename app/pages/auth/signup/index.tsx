"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";
import Image from "next/image";
import useAuthStore from "@/app/store";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import styles from "../auth.module.css";
import Button from "@/app/components/ui/buttons";
import TextField from "@/app/components/ui/inputs/custominput";
import Apple from "@/app/assets/myApple.svg";
import Google from "@/app/assets/devicon_google.svg";
import FB from "@/app/assets/Facebook.svg";
import { Inputs } from "@/app/types/interface";

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast.success("Sign Up Successful");
    router.push("/pages/dashboard");
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Enter Email
          </label>
          <TextField
            control={control}
            name="email"
            placeholder="Enter email *"
            type="text"
            rules={{
              required: {
                value: true,
                message: "Email is reuired",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            }}
            className="mb-5 border-[1px] border-[#D1D1D5]"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="pb-3 text-[14px] font-bold leading-[20px]"
          >
            Password
          </label>
          <TextField
            control={control}
            name="password"
            placeholder="Enter password"
            isPassword
            rules={{
              required: {
                value: true,
                message: "password is reuired",
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"|,.<>?]).*$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            }}
            className="mb-5 border-[1px] border-[#D1D1D5]"
          />
        </div>

        <Button
          variant="add"
          type="submit"
          size="md"
          disabled={false}
          text={isSubmitting ? "Loading....." : "Sign Up"}
          className="mt-6 w-[100%] rounded-none"
        />

        <p className="pt-5 text-center font-bold leading-[20px] text-[#023C63]">
          Forgot your password?
        </p>
      </div>
      <div>
        <p className="pb-4 pt-6 text-center">Or connect with:</p>
        <div
          className="mb-5 flex h-[45px] w-full cursor-pointer items-center gap-9 border-[2px] border-[#D1D1D5] pl-7"
          onClick={() => {
            signIn("github", {
              callbackUrl: "/pages/dashboard",
            });
          }}
        >
          <Image src={Apple} alt="" />
          <p>Continue with Apple</p>
        </div>{" "}
        <div
          className="mb-5 flex h-[45px] w-full cursor-pointer items-center gap-9 border-[2px] border-[#D1D1D5] pl-7"
          onClick={() =>
            signIn("facebook", {
              callbackUrl: "/pages/dashboard",
            })
          }
        >
          <Image src={FB} alt="" />
          <p>Continue with Facebook</p>
        </div>{" "}
        <div
          className="mb-5 flex h-[45px] w-full cursor-pointer items-center gap-9 border-[2px] border-[#D1D1D5] pl-7"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/pages/dashboard",
            })
          }
        >
          <Image src={Google} alt="" />
          <p>Continue with Google</p>
        </div>
      </div>

      <div className="text-center leading-[27px]">
        <div className="flex items-center gap-4">
          <input type="checkbox" />
          <p>I am a landlord or industry professional</p>
        </div>
        <p>By submitting, I accept Arellow&aposs; terms of use.</p>
        <p>Mix of letters and numbers</p>
        <p>At least 1 special character</p>
        <p> At least 1 lowercase letter and 1 uppercase letter</p>
      </div>
    </form>
  );
};

export default SignUp;