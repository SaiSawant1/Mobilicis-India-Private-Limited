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

interface AddEducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddEducationModal({ isOpen, onClose }: AddEducationModalProps) {
  const form = useForm<AddEducationFormSchemaValidator>({
    resolver: zodResolver(AddEducationFormSchema),
    defaultValues: {
      college: "",
      degree: "",
      startYear: "",
      endYear: "",
      description: "",
    },
  });

  const params = useParams();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const origin=useOrigin()
  const onSubmit = async (values: AddEducationFormSchemaValidator) => {
    try {
      await axios.post(`/api/user/${params.id}/education`, values);
      router.push(origin + `/user/${user._id}/profile`);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="Add College Details"
      description="Add Information about your college"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="college"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your College/University Name</FormLabel>
                <FormControl>
                  <Input placeholder="IIT Bombay" {...field} />
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
                    <Input placeholder="2017" {...field} />
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
                    <Input placeholder="2021" {...field} />
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
                  <Input placeholder="Btech" {...field} />
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
                  <Textarea placeholder="describe your experience" {...field} />
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

export default AddEducationModal;
