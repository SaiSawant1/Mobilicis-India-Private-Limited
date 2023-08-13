"use client";
import React from "react";
import { Button } from "./button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import {CldUploadWidget} from "next-cloudinary"


interface UserImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string;
}

function UserImageUpload({
  onChange,
  onRemove,
  value,
  disabled,
}: UserImageUploadProps) {
  const [isMounter, setIsMounter] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounter(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounter) return null;
  return (
    <div className="mb-flex items-center gap-4">
      <div className="relative w-[200px] h-[200px] rounded-full">
        <div className="z-10 absolute top-2 right-2">
            <Button type="button" onClick={()=>{onRemove(value)}} variant={"default"} size={"lg"}><Trash className="h-4 w-4"/></Button>
        </div>
        <Image fill src={value} alt="" className="w-full object-cover h-full rounded-full" />
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="gqkkjpzl">
            {({open})=>{

                const onClick=()=>{
                    open();
                }
                return (
                    <Button
                    onClick={onClick}
                    disabled={disabled}
                    variant="secondary"
                    type="button">
                    <ImagePlus className="h-4 w-4" /> upload an Image
                    </Button>
                )
            }}
      </CldUploadWidget>
    </div>
  );
}

export default UserImageUpload;
