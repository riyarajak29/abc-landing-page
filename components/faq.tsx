import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI tutor work?",
    answer:
      "Our AI tutor uses advanced machine learning algorithms to understand your learning patterns, identify weak areas, and provide personalized recommendations. It analyzes your performance on practice questions and adapts the difficulty level to match your current skill level.",
  },
  {
    question: "Is the content aligned with the latest JEE syllabus?",
    answer:
      "Yes, our content is regularly updated to match the latest JEE Main and Advanced syllabus. We have a team of IIT graduates and experienced faculty who ensure all questions and study materials are relevant and up-to-date.",
  },
  {
    question: "Can I access the platform offline?",
    answer:
      "Yes, our mobile app allows you to download study materials, practice questions, and video solutions for offline access. You can study anytime, anywhere without an internet connection.",
  },
  {
    question: "What if I need help from a human teacher?",
    answer:
      "While our AI tutor handles most doubts instantly, Pro and Ultimate plan subscribers get access to live doubt solving sessions with experienced teachers. You can also join our community forums to discuss with peers and mentors.",
  },
  {
    question: "How accurate is the AI doubt solving?",
    answer:
      "Our AI has been trained on millions of JEE questions and solutions, achieving 98% accuracy in providing correct explanations. For complex doubts, the AI provides multiple solution approaches and can escalate to human teachers if needed.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "You can upgrade or downgrade your plan at any time. When you upgrade, you get immediate access to new features. If you downgrade, the changes take effect at the end of your current billing cycle.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">Got questions? We've got answers.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
