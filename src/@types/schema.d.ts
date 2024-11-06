// @types.zod.schema

import { z } from "zod"
import { registrationSchema } from "../schema/registrationSchema";

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;