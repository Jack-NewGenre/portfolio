"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction, useState } from "react"
import { sendForm } from "@/lib/send-enquiry"
import { toast } from "sonner"

const formSchema = z.object({
  fullname: z.string({message: "Full name is required"}).min(1, {message: "Full name is too short"}).max(50, {message: "Full name is too long"}),
  email: z.email({message: "Invalid email address"}),
  budget: z.string("Please select a budget"),
  description: z.string({message: "Description is required"}).max(500, {message: "Description is too long"}),
})

export type ContactFormValues = z.infer<typeof formSchema>

const ContactForm = ({setIsOpen}: {setIsOpen: Dispatch<SetStateAction<boolean>>}) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      description: "",
    },
  })

const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await sendForm(data)
      if (!response) {
        throw new Error("Failed to submit form")
      }
      console.log("Form submitted successfully!")
      form.reset()
      toast.success("Project enquiry sent")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Project enquiry failed")
    } finally {
      setIsSubmitting(false)
      setIsOpen(false)
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

              <Controller
                name="budget"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Budget</FieldLabel>

                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                      >
                      <SelectTrigger aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Less than £5K">Less than £5K</SelectItem>
                        <SelectItem value="£5K - £10K">£5K - £10K</SelectItem>
                        <SelectItem value="More than £10K">More than £10K</SelectItem>
                      </SelectContent>
                    </Select>

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
                <Button type="button" variant="outline" onClick={() => form.reset()} disabled={isSubmitting}>
                    Reset
                </Button>
                <Button type="submit" form="enquiry-form" disabled={isSubmitting}>
                    Submit
                </Button>
            </Field>

        </form>
    </div>
  )
}

export default ContactForm
