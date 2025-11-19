"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ContactForm from "@/components/atoms/ContactForm";
import { ReactNode, useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const EnquiryPopup = ({trigger}: {trigger:ReactNode}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return ( 
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    {trigger}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Start a project</DialogTitle>
                        <DialogDescription>
                            Fill out the form below and I will get back in touch with you as soon as possible.
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[50vh] overflow-y-auto">
                        <div>
                            <ContactForm setIsOpen={setIsOpen} />
                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </div>
     );
}

export default EnquiryPopup;