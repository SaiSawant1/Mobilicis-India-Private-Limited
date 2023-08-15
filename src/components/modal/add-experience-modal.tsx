import React from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import {
  AddExperienceFormSchema,
  AddExperienceFormSchemaValidator,
} from "@/lib/validators/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import useOrigin from "@/hooks/use-origin";

interface AddExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddExperienceModal({ isOpen, onClose }: AddExperienceModalProps) {
  const form = useForm<AddExperienceFormSchemaValidator>({
    resolver: zodResolver(AddExperienceFormSchema),
    defaultValues: {
      duration: "",
      startDateEndDate: "",
      designation: "",
      role: "",
      employer: "",
    },
  });

  const { id } = useParams();
  const router=useRouter()
  const user=useSelector((state:RootState)=>state.user)
  const origin=useOrigin()
  const onSubmit = async (value: AddExperienceFormSchemaValidator) => {
    try {
      await axios.post(`/api/user/${id}/experiences`, value);
      router.push(origin+`/user/${user._id}/profile`)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      title="Add Experience"
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
                  <Input placeholder="eg. Google" {...field} />
                </FormControl>
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
                    <Input placeholder="eg. 1 Years" {...field} />
                  </FormControl>
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
                    <Input placeholder="eg. 2017-2018" {...field} />
                  </FormControl>
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
                  <Input placeholder="eg. Full Stack Developer" {...field} />
                </FormControl>
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
                  <Input placeholder="eg. Intern" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex mt-4 justify-center items-center w-full">
            <Button variant="outline" >Submit</Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}

export default AddExperienceModal;
