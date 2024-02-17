"use client"

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
};


const SubmitButton = ({ children, className }: SubmitButtonProps) => {

  const {pending} = useFormStatus()

	return <Button size="lg" className={cn("min-w-[180px] rounded-none",className)} disabled={pending}>{pending ? "Wait..." : children}</Button>;
};
export default SubmitButton;
