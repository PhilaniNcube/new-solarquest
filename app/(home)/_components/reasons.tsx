import { Card, CardContent, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    title: "Significant Savings",
    description:
      "As utility costs continue to rise, solar power remains a stable, cost-effective option. By saving on utility bills, your solar installation can potentially pay for itself over time.",
  },
  {
    title: "Be a Part of the Solution",
    description:
      "Contribute to a sustainable future by actively reducing greenhouse gas emissions and dependence on non-renewable energy. Embark on a journey towards a greener planet with our solar installations. ",
  },
  {
    title: "Energy Independence",
    description:
      "Free yourself from the unpredictable utility price hikes and frequent power outages! Join the solar revolution and produce your very own, constant stream of electricity. ",
  },
  {
    title: "Increase Your Property Value",
    description:
      "Solar installations not only save you money on energy bills but also increase the resale value of your property. A solar-powered home is an asset that attracts a large pool of potential environmentally conscious buyers.",
  },
];

const Reasons = () => {
  return (
    <section className="container py-10 mx-auto">
      <h2 className="text-3xl font-bold text-center text-zinc-800">Why Solar?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {reasons.map((reason, index) => (
          <Card className="p-6" key={index}>
            <CardTitle className="text-lg font-bold text-zinc-800">
              {reason.title}
            </CardTitle>
            <CardContent className="p-0">
              <p className="mt-3 text-sm md:text-md text-zinc-700 md:tracking-wider">
                {reason.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Reasons;
