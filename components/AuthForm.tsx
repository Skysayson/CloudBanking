"use client"; //Every form will always be use client, client side makes render of file client-sided

import React, { useState } from "react";
import Link from "next/link";
import CustomFormInput from "./FormInput";
import { Loader2 } from "lucide-react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { FormInput } from "lucide-react";
import { authFormSchema } from "@/lib/utils";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onHover, setOnHover] = useState(false);

  const formSchema = authFormSchema(type);

  // 1. Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //
  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);

    try {
      //Sign up with Appwrite & create plaid token
      if(type === 'sign-up') {
        
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <section className="auth-form border-red-600">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="CloudBanking logo"
          />
          <h1 className="text-[24px] font-ibm-plex-serif font-bold text-black-1">
            {" "}
            CloudBank{" "}
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Log in" : "Sign up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {type === "sign-in"
              ? "Welcome back! Please enter your details."
              : "Please enter your details."}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {type === "sign-up" && (
              <>
                <div className="flex gap-4">
                  <CustomFormInput
                    control={form.control}
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                  />

                  <CustomFormInput
                    control={form.control}
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                  />
                </div>

                <CustomFormInput
                  control={form.control}
                  name="address"
                  label="Address"
                  placeholder="Enter your specific address"
                />

                <div className="flex gap-4">
                  <CustomFormInput
                    control={form.control}
                    name="state"
                    label="State"
                    placeholder="Example: NY"
                  />

                  <CustomFormInput
                    control={form.control}
                    name="postalCode"
                    label="Postal Code"
                    placeholder="Example: 6014"
                  />
                </div>
                <div className="flex gap-4">
                  <CustomFormInput
                    control={form.control}
                    name="dateOfBirth"
                    label="Date of Birth"
                    placeholder="YYYY-MM-DD"
                  />
                  <CustomFormInput
                    control={form.control}
                    name="socialSecurityNumber"
                    label="SSN"
                    placeholder="ex: 1234"
                  />
                </div>
              </>
            )}

            <CustomFormInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />

            <CustomFormInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />

            <div className="flex flex-col gap-4">
              <Button type="submit" className="form-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="form-link"
        >
          {type === "sign-in" ? "Sign up" : "sign-in"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
