import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default function FAQ() {
  return (
    <section className="my-16 container mx-auto px-6">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-8 text-gray-800">FAQs</h2>
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl cursor-pointer">What services do you offer?</AccordionTrigger>
          <AccordionContent className="text-lg">
            We provide general, cosmetic, pediatric, and surgical dental services.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl cursor-pointer">Do you accept insurance?</AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes, we accept all major insurance plans. Please contact us for verification.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}