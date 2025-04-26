import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function HackathonFAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" id="faq">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about Hackathon Valley.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who can participate in Hackathon Valley?</AccordionTrigger>
              <AccordionContent>
                Hackathon Valley is open to all students, professionals, and tech enthusiasts. Whether you're a beginner
                or an experienced developer, designer, or product manager, you're welcome to join!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How much does it cost to participate?</AccordionTrigger>
              <AccordionContent>
                Hackathon Valley is completely free to participate! Thanks to our generous sponsors, we provide food,
                swag, and resources at no cost to participants.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do I need to have a team to register?</AccordionTrigger>
              <AccordionContent>
                No, you can register as an individual and form or join a team later. We have team formation events and a
                dedicated platform to help you find teammates with complementary skills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What should I bring to the hackathon?</AccordionTrigger>
              <AccordionContent>
                You should bring your laptop, charger, any hardware you plan to use, and your creativity! We'll provide
                food, drinks, and a comfortable hacking environment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How are projects judged?</AccordionTrigger>
              <AccordionContent>
                Projects are judged based on innovation, technical complexity, design, practicality, and presentation.
                Our panel of judges includes industry experts, sponsors, and tech leaders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Can I work on a pre-existing project?</AccordionTrigger>
              <AccordionContent>
                No, all projects must be started from scratch at the beginning of the hackathon. You can come with
                ideas, but the coding and development must begin when the hackathon starts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>What kind of support will be available during the event?</AccordionTrigger>
              <AccordionContent>
                We provide technical mentors, workshops, sponsor resources, and a dedicated support team to help you
                throughout the hackathon. You'll never be left without assistance!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
