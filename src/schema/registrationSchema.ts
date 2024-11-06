import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be 3 characters long."),
  email: z
    .string()
    .email(),
  password: z
    .string()
    .min(8, "Password must be 8 characters long.")
})