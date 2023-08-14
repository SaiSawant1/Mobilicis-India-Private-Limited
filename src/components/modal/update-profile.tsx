import React from 'react'
import Modal from '../ui/Modal'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormItem, FormLabel } from '../ui/form'
import UserImageUpload from '../ui/UserImageUpload'
import { Button } from '../ui/button'
import axios from 'axios'
import { useParams } from 'next/navigation'


interface UpdateProfileProps{
    isOpen:boolean,
    onClose:()=>void
    initialData:string
}

const UpdateProfileSchema = z.object({
    url: z.string(),
})

type UpdateProfileSchemaValidator=z.infer<typeof UpdateProfileSchema>

function UpdateProfile({isOpen,initialData,onClose}:UpdateProfileProps) {
  
    const form=useForm<UpdateProfileSchemaValidator>({
        resolver:zodResolver(UpdateProfileSchema),
        defaultValues:{
            url:initialData
        }
    })

    const {id}=useParams()

    const onSubmit=async(value:any)=>{
        try {
            await axios.patch(`/api/user/${id}/updateprofile`,value)
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <Modal title='Update Profile' description='Please Update your Profile Photo'  isOpen={isOpen} onClose={onClose} >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
                <FormField
                control={form.control}
                name='url'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Profile Photo</FormLabel>
                        <UserImageUpload 
                        disabled={false}
                        onRemove={
                            (value: string) => {
                              field.onChange("");
                            }
                        }
                        onChange={
                            (value: string) => {
                              field.onChange(value);
                            }
                          }
                        value={field.value}  />
                    </FormItem>
                )}
                />
                <Button variant={'outline'} className='my-4 '>
                    Upload
                </Button>
            </form>
        </Form>
    </Modal>
  )
}

export default UpdateProfile