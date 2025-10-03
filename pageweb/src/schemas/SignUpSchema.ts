import * as zod from 'zod'

export const SignUpShema = zod.object({
  // fullName: zod.string('Enter your name').min(2, "Full name must be at least 2 characters long"),
  email: zod.string().email("Invalid email address"),
  password_hash: zod.string('Required field').min(6, "Password must be at least 6 characters long"),
  // passwordConfirm: zod.string().min(6, "Confirm your password"),
})
// .refine((data) => data.password === data.passwordConfirm, {
//   message: "Password do not match",
//   path: ["passwordConfirm"]
// })

export type SignUpFormData = zod.infer<typeof SignUpShema>;
