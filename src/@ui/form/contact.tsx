"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useContactForm } from "@/app/hooks/form/contact";
import { Center, Component, Heading } from "../component";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { form, onSubmit } = useContactForm();
  return (
    <Component>
      <Center className="w-full h-full pt-16 pb-10 px-5 md:px-0">
        <article id="contact">
          <Heading
            title="Get in Touch"
            body="We’d love to hear from you! Whether you have questions, need more
            information, or want to schedule a lesson, feel free to reach out."
          />
          <section className="flex flex-col md:flex-row items-center justify-center gap-10 my-5">
            <Image
              src={"/contact.jpg"}
              alt=""
              width={400}
              height={400}
              className="w-full md:w-1/2 h-auto object-cover object-center"
            />
            <div className="w-full md:w-1/2 mx-auto">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Name</Label>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Message</Label>
                        <FormControl>
                          <Textarea
                            placeholder="Enter your message here..."
                            {...field}
                          ></Textarea>
                        </FormControl>
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
            </div>
          </section>
        </article>
        <section className="grid grid-cols-4 gap-4 pt-10"></section>
      </Center>
    </Component>
  );
}
