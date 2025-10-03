import * as zod from "zod"

export const SignInSchema = zod.object({
  email: zod.string().email("Invalid email address"),
  password: zod.string('Required field').min(6, "Password must be at least 6 characters long")
})

export type SignInFormData = zod.infer<typeof SignInSchema>
