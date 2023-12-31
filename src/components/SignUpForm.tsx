"use client";
import {
  SignUpFormSchemaValidator,
  SignUpFormSchema,
} from "@/lib/validators/FormSchema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
function SignUpForm() {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isDisabled, setDisabled] = React.useState<boolean>(false);
  const router=useRouter()
  const form = useForm<SignUpFormSchemaValidator>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (value: SignUpFormSchemaValidator) => {
    try {
      setDisabled(true);
      setLoading(true);
      const payload = value;
      await axios.post("/api/auth/signup", payload);
      router.push('/login');
    } catch (error) {
      console.log(error);
    } finally {
      setDisabled(false);
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className="my-4 p-6 border-2 rounded-2xl border-gray-600"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex py-2 my-4 flex-col">
              <FormLabel className="text-1xl">Full Name</FormLabel>
              <FormControl>
                <input
                  autoComplete="off"
                  className=" focus:outline-none  text-2xl bg-transparent text-gray-200"
                  placeholder="Full Name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex py-2 my-4 flex-col">
              <FormLabel className="text-1xl">Email</FormLabel>
              <FormControl>
                <input
                  autoComplete="off"
                  className="focus:outline-none  text-2xl bg-transparent text-gray-200"
                  placeholder="Enter Email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex py-2 my-4 flex-col">
              <FormLabel className="text-1xl">Password</FormLabel>
              <FormControl>
                <input
                  autoComplete="off"
                  className="focus:outline-none  text-2xl bg-transparent text-gray-200"
                  placeholder="Enter Password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          disabled={isDisabled}
          type="submit"
          className="rounded-2xl w-full"
          variant={"outline"}
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  );
}

export default SignUpForm;
