'use client'
import {
  UserFormSchema,
  UserFormSchemaValidator,
} from "@/lib/validators/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import UserImageUpload from "./ui/UserImageUpload";
import { Button } from "./ui/button";

import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

function CreateUserForm() {
  const user=useSelector((state:RootState)=>state.user)
  const form = useForm<UserFormSchemaValidator>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      email: user.email,
      name: user.name,
      about: user.about,
      contact: user.contact,
      image: user.image,
    },
  });

  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(false);


  const onSubmit = async (value: UserFormSchemaValidator) => {
    try {
      setDisabled(true);
      setLoading(true);
      const payload = {...value,id:user.id,_id:user._id};
      const {data}=await axios.post("/api/user/personaldetails", payload)

    } catch (error) {
      console.log(error);
    } finally {
      setDisabled(false);
      setLoading(false);
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input disabled={disabled} placeholder={user.name} {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input disabled={disabled} placeholder={user.email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
               <Textarea disabled={disabled} placeholder="Please Describe Your self" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Contact</FormLabel>
              <FormControl>
                <Input type="text" disabled={disabled} placeholder="Contact" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="text-center flex flex-col justify-center items-center">
              <FormLabel>User Profile</FormLabel>
              <FormControl>
               <UserImageUpload value={field.value?field.value :'https://github.com/shadcn.png'} 
                disabled={disabled}
                onChange={
                  (value: string) => {
                    field.onChange(value);
                  }
                }
                onRemove={
                  (value: string) => {
                    field.onChange("");
                  }
                }
               />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={disabled} className=" my-2 " variant={"outline"}>
          {isLoading?"Loading":"Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default CreateUserForm;
