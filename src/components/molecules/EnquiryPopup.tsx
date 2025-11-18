import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ContactForm from "@/components/atoms/ContactForm";
import { ReactNode } from "react";

const EnquiryPopup = ({trigger}: {trigger:ReactNode}) => {
    return ( 
        <div>
            <Dialog >
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
                    <ContactForm />
                </DialogContent>
            </Dialog>
        </div>
     );
}

export default EnquiryPopup;