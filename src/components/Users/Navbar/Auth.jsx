import React, { useState } from "react";
import {Dialog,DialogContent,DialogHeader,DialogTitle,DialogDescription,DialogClose,} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function Navbar() {
  const [mode, setMode] = useState(null);

  const openModal = (which) => setMode(which);
  const closeModal = () => setMode(null);

  const isLogin = mode === "login";
  const isRegister = mode === "register";

  return (
    <>
      <nav className="h-full w-[40%] flex items-center justify-end gap-4 px-4">
          <Button variant="outline" className="border-none shadow-none cursor-pointer rounded-full text-lg font-semibold " onClick={() => openModal("login")}>
            Login
          </Button>
          <Button className="text-lg font-semibold cursor-pointer transition duration-75 ease-in-out active:scale-95 hover:bg-black " onClick={() => openModal("register")}>Register</Button>
      </nav>

      <Dialog open={!!mode} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader className="mb-4">
            <DialogTitle>
              {isLogin ? "Welcome back!" : "Create an account"}
            </DialogTitle>
            <DialogDescription>
              {isLogin
                ? "Sign in to continue."
                : "Fill the form below to get started."}
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`${isLogin ? "Logged in" : "Registered"} successfully!`);
              closeModal();
            }}
            className="space-y-3"
          >
            {!isLogin && (
              <Input
                required
                placeholder="Full name"
                className="w-full"
              />
            )}

            <Input
              type="email"
              required
              placeholder="Email address"
              className="w-full"
            />
            <Input
              type="password"
              required
              placeholder="Password"
              className="w-full"
            />

            <Button type="submit" className="w-full">
              {isLogin ? "Login" : "Register"}
            </Button>
          </form>

          <DialogClose asChild>
            <button
              onClick={closeModal}
              className="absolute right-[14px] top-[14px]  text-zinc-500 shadow-none cursor-pointer  "
              aria-label="Close dialog"
            >
              <X className="w-6 h-6 cursor-pointer shadow-none text-lg font-semibold" />
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
