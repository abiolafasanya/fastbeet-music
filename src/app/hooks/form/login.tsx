"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";

interface ILoginContext {
  openLoginModal: boolean;
  toggleOpenLoginModal: () => void;
  form: UseFormReturn<
    {
      email: string;
      password: string;
    },
    any,
    undefined
  >;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

const LoginContext = createContext({} as ILoginContext);

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  function toggleOpenLoginModal() {
    return setOpenLoginModal((open) => !open);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
    toast("Message sent, We will get back back to you soon.");
  }

  const values = {
    openLoginModal,
    toggleOpenLoginModal,
    form,
    onSubmit,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}


