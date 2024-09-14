"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Center, Component, Heading } from "../component";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/app/hooks/form/login";
import { LuEye, LuEyeOff, LuX } from "react-icons/lu";
import { ReactNode, useState } from "react";
import Link from "next/link";

export function Login() {
  const { form, onSubmit, openLoginModal, toggleOpenLoginModal } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((show) => !show);
  return (
    <>
      {openLoginModal && (
        <section className="h-screen w-screen fixed z-50 top-0 right-0 left-0 bg-black/90">
          <Component>
            <Center className="w-full h-full pt-16 pb-10 px-5 md:px-0">
              <article
                id="login"
                className="relative w-full h-full md:w-3/4 flex flex-col gap-4 items-center justify-center mx-auto bg-white p-10 shadow-sm rounded"
              >
                <button
                  className="absolute top-4 right-4"
                  onClick={toggleOpenLoginModal}
                >
                  <LuX className="text-primary-900" size={24} />
                </button>
                <Heading title="Login" body="Welcome to Fastbeet Music" />
                <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 my-5">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-5 w-full md:w-[278px]"
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Label>Email</Label>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="hi@email.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <Label>Password</Label>
                            <FormControl>
                              <div className=" relative">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="******"
                                  {...field}
                                />
                                <button
                                  type="button"
                                  className="absolute top-3 right-2"
                                  onClick={togglePassword}
                                >
                                  {showPassword ? (
                                    <LuEyeOff
                                      size={20}
                                      className="text-primary-900"
                                    />
                                  ) : (
                                    <LuEye
                                      size={20}
                                      className="text-primary-900"
                                    />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <p className="text-sm">
                              Forgot Password?{" "}
                              <Link
                                className="text-primary-900"
                                href={"#reset"}
                              >
                                Reset now
                              </Link>
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        className="bg-primary-500 hover:bg-primary-500/90"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </form>
                  </Form>
                </section>
              </article>
            </Center>
          </Component>
        </section>
      )}
    </>
  );
}

export function LoginButton({ children }: { children: ReactNode }) {
  const { toggleOpenLoginModal } = useLogin();

  return (
    <Button
      className="bg-primary-900 my-5 px-7 py-3 hover:bg-primary-950 text-primary-50"
      onClick={toggleOpenLoginModal}
    >
      {children}
    </Button>
  );
}
