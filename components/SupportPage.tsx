import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function SupportPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name") || "User";
    const subject = formData.get("subject");
    const message = formData.get("message");

    try {
      const response = await fetch(
        "https://brevondo.botmun.workers.dev/message/brevo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: {
              email: "mr.k779@outlook.com",
              name: "Today Support",
            },
            to: [
              {
                email: "mr.k779@gmail.com",
                name: "Rafi",
              },
            ],
            subject: subject,
            htmlContent: message,
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const faqs = [
    {
      question: "How does the daily reset work?",
      answer:
        "Every night at midnight, your 'Today' view is cleared. Unfinished tasks are moved to 'The Drawer', so you wake up to a fresh slate.",
    },
    {
      question: "Can I retrieve tasks from the Drawer?",
      answer:
        "Yes! You can always open The Drawer to see past unfinished tasks and move them back to Today when you're ready to tackle them.",
    },
    {
      question: "Is Today available for Android?",
      answer:
        "Currently, Today is built natively for Apple devices (iOS and macOS). We may consider Android in the future based on demand.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can manage your subscription directly through the App Store on your device by going to Settings > Apple ID > Subscriptions.",
    },
    {
      question: "How can I restore my subscription?",
      answer:
        "To restore your subscription, open the Today app, go to Settings, and tap 'Restore Purchases'. Your active subscription will be recognized immediately.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-20 px-6 max-w-6xl mx-auto"
    >
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
          Support
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400">
          We're here to help! Read our FAQs below or drop us a message if you
          need further assistance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-zinc-500 dark:text-zinc-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-xl font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                Your message has been sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
}
