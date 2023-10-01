import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignIn } from "@clerk/nextjs";

const SignInModal = () => {
  return (
    <Dialog>
      <DialogTrigger>Sign In</DialogTrigger>
      <DialogContent>
        <SignIn />
      </DialogContent>
    </Dialog>
  );
};
export default SignInModal;
