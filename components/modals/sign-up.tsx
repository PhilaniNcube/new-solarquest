import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignUp } from "@clerk/nextjs";

const SignUpModal = () => {
  return (
    <Dialog>
      <DialogTrigger>Sign Up</DialogTrigger>
      <DialogContent>
        <SignUp />
      </DialogContent>
    </Dialog>
  );
};
export default SignUpModal;
