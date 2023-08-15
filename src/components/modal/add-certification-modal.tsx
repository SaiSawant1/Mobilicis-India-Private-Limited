'use client'
import React from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import {
  AddCertificationFormSchema,
  AddCertificationFormSchemaValidator,
} from "@/lib/validators/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import useOrigin from "@/hooks/use-origin";

interface AddCertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCertificationModal({
  isOpen,
  onClose,
}: AddCertificationModalProps) {
  const form = useForm<AddCertificationFormSchemaValidator>({
    resolver: zodResolver(AddCertificationFormSchema),
    defaultValues: {
      name: "",
      grantedBy: "",
    },
  });

  const { id } = useParams();
  const router=useRouter()
  const user=useSelector((state:RootState)=>state.user)
  const origin=useOrigin()
  const onSubmit = async (value: AddCertificationFormSchemaValidator) => {
    
    try {
      await axios.post(`/api/user/${id}/certifications`, value);
      router.push(origin+`/user/${user._id}/profile`)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Certificates"
      description="Add Your Certifications"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of the Certification</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of the Certification" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="grantedBy"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Certification Was Granted By</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <Button
              type="submit"
              variant={"outline"}
              className=" m-auto  my-4 px-7"
            >
              Add
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}

export default AddCertificationModal;
