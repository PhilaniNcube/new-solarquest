import Image from "next/image";
import ContactForm from "../(contact)/contact-form";

const ContactPage = () => {
  return <main className="py-8">
    <div className="container px-8 lg:p-0">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-lg">
            We are here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
          <p className="text-lg">
            Please fill out the form and we will get back to you as soon as
            possible.
          </p>
          <Image src="/images/contact.webp" width={1648} height={720} alt="Contact" className="object-cover w-full" />
        </div>
        <ContactForm />
      </div>
    </div>
  </main>;
};
export default ContactPage;
