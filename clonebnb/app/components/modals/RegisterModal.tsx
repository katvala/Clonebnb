"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Button from "../Button";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Input from "../inputs/Input";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Heading from "../Heading";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    axios
      .post("/api/signup", { name, email, password })
      .then(() => {
        registerModal.onClose();
        toast.success("Account created");
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };
  const toggleOpen = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const signupBody = (
    <div className="p-5">
      <Heading title="Welcome to Airbnb" />
      <form className="flex flex-col gap-5 border-b pb-10">
        <Input onChange={setName} value={name} type="text" placeholder="Name" />
        <Input
          onChange={setEmail}
          value={email}
          type="email"
          placeholder="Email"
        />
        <Input
          onChange={setPassword}
          value={password}
          type="password"
          placeholder="Password"
        />
      </form>
    </div>
  );

  const signupFooter = (
    <div className="p-5">
      <div className="flex flex-col gap-5 border-b pb-10">
        <Button
          onClick={() => signIn("google")}
          text="Continue with Google"
          outline
          icon={<FcGoogle size={20} />}
        />
        <Button
          onClick={() => signIn("github")}
          text="Continue with Github"
          outline
          icon={<AiFillGithub size={20} />}
        />
      </div>
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={toggleOpen}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      label="Sign up"
      body={signupBody}
      buttonLabel="Continue"
      onSubmit={submitHandler}
      footer={signupFooter}
      close={registerModal.onClose}
    />
  );
};

export default RegisterModal;
