"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchemaType } from "@/lib/schemas/contact-form-schema";
import { formSchema } from "@/lib/schemas/contact-form-schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ContactUsForm = () => {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      queries: "",
    },
  });

  const onSubmitForm = (value: formSchemaType) => {
    console.log(value);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-8">
        <Card className="w-[85%] mx-auto bg-[#d7c99e] rounded-3xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center pb-4">
              Reach us out at :
            </CardTitle>
            <p className="text-center ">
              Feel free to leave your thoughts down below and we will respond
              and get in touch with you!!
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="text-left space-y-0">
                  <FormLabel className="w-fit mr p-0 text-lg">
                    Name (Required){" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white text-black py-3"
                      placeholder="Enter Your name here"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="text-left space-y-0">
                  <FormLabel className="text-left text-lg">
                    Email (Required){" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white text-black py-3"
                      placeholder="Enter Your Email here"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="queries"
              render={({ field }) => (
                <FormItem className="text-left space-y-0">
                  <FormLabel className="text-left text-lg">Queries </FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-white text-black h-16"
                      placeholder="Enter Your Queries here"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-fit mx-auto bg-[#ffedb8] text-black font-semibold"
            >
              Save
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default ContactUsForm;
