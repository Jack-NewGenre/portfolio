import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/atoms/ContactForm";

const EnquiryPopup = () => {
    return ( 
        <div>
            <Dialog >
                <DialogTrigger asChild>
                    <Button className="mt-8 group" variant="default" size="default">
                        Get in Touch <ArrowRight className="rotate-0 group-hover:-rotate-45 transition-all duration-300" />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Get in touch with me</DialogTitle>
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