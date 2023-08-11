'use client'
import { SignUpFormSchemaValidator,SignUpFormSchema } from '@/lib/validators/FormSchema'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel } from './ui/form'
import { Button } from './ui/button'
function SignUpForm() {
    const form=useForm<SignUpFormSchemaValidator>({
        resolver:zodResolver(SignUpFormSchema),
        defaultValues:{
            email:"",
            password:"",
            name:"",
        }
    })
    
    const onSubmit=(value:SignUpFormSchemaValidator)=>{
        console.log(value)
    }

  return (
    <Form  {...form}>
        <form className='my-4 p-6 border-2 rounded-2xl border-gray-600' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="name"
                render={({field})=>(
                    <FormItem className='flex py-2 my-4 flex-col'>
                        <FormLabel className='text-1xl'>Full Name</FormLabel>
                        <input autoComplete='off'  className=' focus:outline-none  text-2xl bg-transparent text-gray-200' placeholder='Full Name' {...field} />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({field})=>(
                    <FormItem className='flex py-2 my-4 flex-col'>
                        <FormLabel className='text-1xl'>Email</FormLabel>
                        <input autoComplete='off' className='focus:outline-none  text-2xl bg-transparent text-gray-200' placeholder='Enter Email' {...field} />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({field})=>(
                    <FormItem className='flex py-2 my-4 flex-col'>
                        <FormLabel className='text-1xl'>Password</FormLabel>
                        <input autoComplete='off' className='focus:outline-none  text-2xl bg-transparent text-gray-200' placeholder='Enter Password' {...field} />
                    </FormItem>
                )}
            />
                <Button type='submit' className='rounded-2xl w-full' variant={'outline'} >Submit</Button>
        </form>
    </Form>
  )
}

export default SignUpForm