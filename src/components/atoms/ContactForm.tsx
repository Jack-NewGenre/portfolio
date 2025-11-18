"use client"

import * as React from "react"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const formSchema = z.object({
  fullname: z.string({message: "Full name is required"}).min(1, {message: "Full name is too short"}).max(50, {message: "Full name is too long"}),
  email: z.email({message: "Invalid email address"}),
  description: z.string({message: "Description is required"}).max(500, {message: "Description is too long"}),
})

const ContactForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      description: "",
    },
  })

  //const onSubmit = (data: z.infer<typeof formSchema>) => {
    //console.log("submitted:", data), form.reset()
  //}

const [isSubmitting, setIsSubmitting] = useState(false)
  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch("https://webhook.site/fdd6d4a2-da62-401f-9db6-948c914e71d4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error("Failed to submit form")
      }
    console.log("Form submitted successfully!")
    form.reset() // Clear the form
  } catch (error) {
  console.error("Error submitting form:", error)
  // In production, show user-friendly error message
      } finally {
    setIsSubmitting(false)
  }
}

  return ( 
    <div>
          <form id="enquiry-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>

              {/* fullname */}
              <Controller
                name="fullname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Full name</FieldLabel>

                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter your name"
                    />

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Email</FieldLabel>

                    <Input
                      {...field}
                      placeholder="Enter your email address"
                      type="email"
                    />

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* DESCRIPTION */}
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Description</FieldLabel>

                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        rows={6}
                        className="min-h-24 resize-none"
                        placeholder="Let me know more about your project..."
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText>
                          {field.value.length}/500 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

            </FieldGroup>

            <Field orientation="horizontal" className="mt-6 justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => form.reset()}>
                    Reset
                </Button>
                <Button type="submit" form="enquiry-form">
                    Submit
                </Button>
            </Field>

        </form>
    </div>
  )
}

export default ContactForm
