"use client";

import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";
import Button from "../Button";
import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Input from "../inputs/Input";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Heading from "../Heading";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("Logged in successfully");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  const toggleOpen = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const loginBody = (
    <div className="p-5">
      <Heading title="Welcome to Airbnb" />
      <form className="flex flex-col gap-5 border-b pb-10">
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

  const loginFooter = (
    <div className="p-5">
      <div className="flex flex-col gap-5 border-b pb-10">
        <Button
          text="Continue with Google"
          outline
          icon={<FcGoogle size={20} />}
          onClick={() => signIn("google")}
        />
        <Button
          text="Continue with Github"
          outline
          icon={<AiFillGithub size={20} />}
          onClick={() => signIn("github")}
        />
      </div>
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>First time using Airbnb?</div>
          <div
            onClick={toggleOpen}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      label="Log in"
      body={loginBody}
      buttonLabel="Continue"
      onSubmit={submitHandler}
      footer={loginFooter}
      close={loginModal.onClose}
    />
  );
};

export default LoginModal;
