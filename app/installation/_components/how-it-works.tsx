import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const installationSteps = [
  {
    id: "1",
    title: "Consultation and Site Evaluation",
    description:
      "Our solar team assesses your site's solar potential and devises an optimal system to suit your energy needs. We answer all queries and guide you through the entire process.",
  },
  {
    id: "2",
    title: "Custom System Design",
    description:
      "Post-assessment, our team designs a solar power system tailored specifically for your home. We cater to your unique load requirements and ensure optimal efficiency.",
  },
  {
    id: "3",
    title: "Installing Solar Panels",
    description:
      "Our professional installers mount your solar panels safely and securely, ensuring optimal placement for maximum sun exposure.",
  },
  {
    id: "4",
    title: "Connecting Inverter and Battery",
    description:
      "We seamlessly connect your solar panels to the inverter and battery. This setup converts and stores the solar energy, readying it for home use.",
  },
  {
    id: "5",
    title: "System Testing and Activation",
    description:
      "After installation, we thoroughly test your solar power system to ensure its perfect working condition. Post successful testing, we set your system live.",
  },
  {
    id: "6",
    title: "Ongoing Support and Maintenance",
    description:
      "We offer comprehensive support and maintenance services to ensure your solar system continuously operates at peak performance. Say goodbye to load shedding fears!",
  },
];

const HowItWorks = () => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold text-zinc-700">How it works</h1>
      <div className="@container mt-5 w-full grid grid-cols-1 text-zinc-800 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {installationSteps.map((step, index) => (
          <Card key={index} className="hover:shadow-md">
            <CardHeader>
              <small className="text-xs text-zinc-600">{`Step ${step.id}`}</small>
              <CardTitle className="text-md">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-md text-zinc-700">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default HowItWorks;
