import React from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddSkillFormSchema,
  AddSkillFormSchemaValidator,
} from "@/lib/validators/FormSchema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import useOrigin from "@/hooks/use-origin";

interface AddSkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string | string[];
}

function AddSkillModal({ isOpen, onClose, id }: AddSkillsModalProps) {
  const form = useForm<AddSkillFormSchemaValidator>({
    resolver: zodResolver(AddSkillFormSchema),
    defaultValues: {
      skills: "",
    },
  });

  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const origin=useOrigin()
  const onSubmit = async (value: AddSkillFormSchemaValidator) => {
    try {
      await axios.post(`/api/user/${id}/skills`, value);
      router.push(origin + `/user/${user._id}/profile`);
      window.location.reload()
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      title="Add Skill"
      isOpen={isOpen}
      onClose={onClose}
      description="Please enter your skills"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Input placeholder="NextJs,React" {...field} />
                </FormControl>
                <FormDescription>
                  Please Enter your skills separated by comma
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className=" w-full my-4 px-7" variant="outline">
            Add skills
          </Button>
        </form>
      </Form>
    </Modal>
  );
}

export default AddSkillModal;
