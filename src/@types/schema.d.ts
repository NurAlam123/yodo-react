import { z } from "zod"
import { registrationSchema } from "../schema/registrationSchema";

export type registrationSchemaType = z.infer<typeof registrationSchema>;