import { z } from "zod";

export const contactFormSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    company: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: ContactFormValues = {
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: ""
}