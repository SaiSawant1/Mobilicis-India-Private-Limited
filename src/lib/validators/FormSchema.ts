import * as z from "zod";

export const SignUpFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignUpFormSchemaValidator = z.infer<typeof SignUpFormSchema>;

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFormSchemaValidator = z.infer<typeof LoginFormSchema>;

export const UserFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  image: z.string(),
  about: z.string(),
  contact: z.string(),
});

export type UserFormSchemaValidator = z.infer<typeof UserFormSchema>;

export const AddSkillFormSchema = z.object({
  skills: z.string().min(3),
});

export type AddSkillFormSchemaValidator = z.infer<typeof AddSkillFormSchema>;

export const AddCertificationFormSchema = z.object({
  name: z.string().min(3),
  grantedBy: z.string().min(3),
});

export type AddCertificationFormSchemaValidator = z.infer<
  typeof AddCertificationFormSchema
>;

export const AddExperienceFormSchema = z.object({
  startDateEndDate: z.string().min(3),
  designation: z.string().min(3),
  role: z.string().min(3),
  employer: z.string().min(3),
  duration: z.string().min(3),
});

export type AddExperienceFormSchemaValidator = z.infer<
  typeof AddExperienceFormSchema
>;

export const AddEducationFormSchema = z.object({
    college : z.string().min(3),
    degree : z.string().min(3),
    startYear : z.string().min(3),
    endYear : z.string().min(3),
    description : z.string().min(10),
})

export type AddEducationFormSchemaValidator = z.infer<typeof AddEducationFormSchema> 
