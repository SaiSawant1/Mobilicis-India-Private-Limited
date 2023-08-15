import React from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import {
  AddExperienceFormSchema,
  AddExperienceFormSchemaValidator,
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
import { Button } from "../ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import useOrigin from "@/hooks/use-origin";

interface UpdateExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues: {
    _id: string;
    userId: string;
    duration: string;
    startDateEndDate: string;
    designation: string;
    role: string;
    employer: string;
  };
}

function UpdateExperienceModal({
  isOpen,
  onClose,
  initialValues,
}: UpdateExperienceModalProps) {
  const form = useForm<AddExperienceFormSchemaValidator>({
    resolver: zodResolver(AddExperienceFormSchema),
    defaultValues: {
      duration: initialValues.duration,
      startDateEndDate: initialValues.startDateEndDate,
      designation: initialValues.designation,
      role: initialValues.role,
      employer: initialValues.role,
    },
    values: initialValues,
  });

  const { id } = useParams();
  const _id = initialValues._id;
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const origin = useOrigin();
  const onSubmit = async (value: AddExperienceFormSchemaValidator) => {
    try {
      const payload = { _id, ...value };
      await axios.patch(`/api/user/${id}/experiences`, payload);
      window.location.reload()
      router.push(origin + `/user/${user._id}/profile`);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="Update Experience"
      description="Please enter your details"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="employer"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employer</FormLabel>
                <FormControl>
                  <Input placeholder={initialValues.employer} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <FormField
              name="duration"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input placeholder={initialValues.duration} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="startDateEndDate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>From To</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={initialValues.startDateEndDate}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="designation"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Designation</FormLabel>
                <FormControl>
                  <Input placeholder={initialValues.designation} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="role"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input placeholder={initialValues.role} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex mt-4 justify-center items-center w-full">
            <Button variant="outline">Update</Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}

export default UpdateExperienceModal;
