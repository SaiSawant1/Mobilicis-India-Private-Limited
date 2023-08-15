import React from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import {
  AddEducationFormSchema,
  AddEducationFormSchemaValidator,
} from "@/lib/validators/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import useOrigin from "@/hooks/use-origin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface UpdateEducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues: {
    _id: string;
    userId: string;
    college: string;
    degree: string;
    startYear: string;
    endYear: string;
    description: string;
  };
}

function UpdateEducationModal({
  isOpen,
  onClose,
  initialValues,
}: UpdateEducationModalProps) {
  const form = useForm<AddEducationFormSchemaValidator>({
    resolver: zodResolver(AddEducationFormSchema),
    defaultValues: {
      college: initialValues.college,
      degree: initialValues.degree,
      startYear: initialValues.startYear,
      endYear: initialValues.endYear,
      description: initialValues.description,
    },
    values: initialValues,
  });

  const params = useParams();
  const _id = initialValues._id;
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const origin = useOrigin();

  const onSubmit = async (values: AddEducationFormSchemaValidator) => {
    try {
      const payload = { _id, ...values };
      await axios.patch(`/api/user/${params.id}/education`, payload);
      router.push(origin + `/user/${user._id}/profile`);
      window.location.reload()
    } catch (error) {
      toast.error('Something went wrong!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <Modal
      title="Update College Details"
      description="Update Information about your college"
      isOpen={isOpen}
      onClose={onClose}
    >
       <ToastContainer />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="college"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your College/University Name</FormLabel>
                <FormControl>
                  <Input placeholder={initialValues.college} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              name="startYear"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Staring Year</FormLabel>
                  <FormControl>
                    <Input placeholder={initialValues.startYear} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="endYear"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Completions Year</FormLabel>
                  <FormControl>
                    <Input placeholder={initialValues.endYear} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="degree"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Degree in</FormLabel>
                <FormControl>
                  <Input placeholder={initialValues.degree} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={initialValues.description}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center m-4 items-center w-full">
            <Button type="submit" variant="outline">
              Add
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}

export default UpdateEducationModal;
