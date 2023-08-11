import * as z from "zod"

export const SignUpFormSchema=z.object({
    name:z.string().min(3),
    email:z.string().email(),
    password:z.string().min(6),
})

export type SignUpFormSchemaValidator=z.infer<typeof SignUpFormSchema>
