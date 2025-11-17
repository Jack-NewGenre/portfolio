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

const formSchema = z.object({
  title: z.string().min(1).max(32),
  email: z.string().min(1).max(100).email(),
  description: z.string().min(1).max(100),
})

const ContactForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      email: "",
      description: "",
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("submitted:", data), form.reset()
  }

  return ( 
    <div>
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>

              {/* TITLE */}
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Name</FieldLabel>

                    <Input
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
                <Button type="submit" form="form-rhf-demo">
                    Submit
                </Button>
            </Field>

        </form>
    </div>
  )
}

export default ContactForm
