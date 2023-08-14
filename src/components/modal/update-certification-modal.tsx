import React from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import {
  AddCertificationFormSchema,
  AddCertificationFormSchemaValidator,
} from "@/lib/validators/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useParams } from "next/navigation";

interface UpdateCertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues: {
    userId: string;
    name: string;
    _id: string;
    grantedBy: string;
  };
}

function UpdateCertificationModal({
  initialValues,
  isOpen,
  onClose,
}: UpdateCertificationModalProps) {
  const form = useForm<AddCertificationFormSchemaValidator>({
    resolver: zodResolver(AddCertificationFormSchema),
    defaultValues: {
      name: initialValues.name,
      grantedBy: initialValues.grantedBy,
    },
  });

  const { id } = useParams();

  const onSubmit = async (value: AddCertificationFormSchemaValidator) => {
    try {
        const _id =initialValues._id
        const payload={_id,...value}
      await axios.patch(`/api/user/${id}/certifications`, payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="Update Certification"
      description="Please Enter Changes"
      isOpen={isOpen}
      onClose={onClose}
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
                    <Input placeholder={initialValues.name} {...field} />
                  </FormControl>
                  <FormMessage/>
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
                    <Input  placeholder={initialValues.grantedBy} {...field} />
                  </FormControl>
                  <FormMessage/>
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
              Update
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}

export default UpdateCertificationModal;
