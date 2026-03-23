import { ContactFormValues } from "@/schemas/contactFormSchemas";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export const useHandleContactForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        setError(null);
        console.log(data)
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
                fullName: data.fullName,
                email: data.email,
                company: data.company,
                service: data.service,
                message: data.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsSuccess(true);
            toast.success("Message sent successfully! We'll get back to you soon.");
        }).catch((error) => {
            console.log('FAILED...', error);
            setError('Failed to send message. Please try again.');
            toast.error("Failed to send message. Please check your connection and try again.");
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

    return {
        isSuccess,
        isSubmitting,
        error,
        onSubmit,
    };
}