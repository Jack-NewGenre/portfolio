"use server"

import { ContactFormValues } from "@/components/atoms/ContactForm"

export const sendForm = async(data: ContactFormValues): Promise<boolean> => {
    const response = await fetch("https://n8n.newgenre.studio/webhook/0e60f95c-f559-457c-9ed6-b18c6a1aa6d8", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return !response ? false : true
}