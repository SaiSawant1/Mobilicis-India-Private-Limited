import React from "react";
import Modal from "../ui/Modal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import UserImageUpload from "../ui/UserImageUpload";
import { Button } from "../ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import useOrigin from "@/hooks/use-origin";

interface UpdateProfileProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: string;
}

const UpdateProfileSchema = z.object({
  url: z.string(),
});

type UpdateProfileSchemaValidator = z.infer<typeof UpdateProfileSchema>;

function UpdateProfile({ isOpen, initialData, onClose }: UpdateProfileProps) {
  const form = useForm<UpdateProfileSchemaValidator>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      url: initialData,
    },
  });

  const { id } = useParams();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const origin = useOrigin();
  const onSubmit = async (value: any) => {
    try {
      await axios.patch(`/api/user/${id}/updateprofile`, value);
      window.location.reload()
      router.push(origin + `/user/${user._id}/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="Update Profile"
      description="Please Update your Profile Photo"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Photo</FormLabel>
                <UserImageUpload
                  disabled={false}
                  onRemove={(value: string) => {
                    field.onChange("");
                  }}
                  onChange={(value: string) => {
                    field.onChange(value);
                  }}
                  value={field.value}
                />
              </FormItem>
            )}
          />
          <Button variant={"outline"} className="my-4 ">
            Upload
          </Button>
        </form>
      </Form>
    </Modal>
  );
}

export default UpdateProfile;
