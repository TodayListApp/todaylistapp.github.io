import { motion } from "framer-motion";
import { ArrowLeft, Quote } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const ManifestoPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-32 pb-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Today</span>
        </Link>

        <header className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-orange-500 font-mono text-xs uppercase tracking-[0.2em] mb-6"
          >
            The Today Manifesto
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif italic leading-tight mb-8"
          >
            A{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-200 drop-shadow-sm dark:drop-shadow-[0_0_20px_rgba(251,146,60,0.2)]">
              fresh start
            </span>
            , <br />
            every single morning.
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-px bg-zinc-200 dark:bg-zinc-800 w-full origin-left"
          />
        </header>

        <div className="space-y-16 text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-zinc-900 dark:text-white font-bold text-2xl mb-6">
              The Tyranny of the Red Badge
            </h2>
            <p className="mb-6">
              Modern productivity tools are built on a lie: that you can do
              everything. They encourage you to capture every fleeting thought,
              every minor chore, and every ambitious project into a single,
              ever-growing list.
            </p>
            <p>
              But lists don't just store tasks; they store expectations. And
              when those expectations aren't met, they turn red. They scream
              "Overdue." They become a digital record of your failures, staring
              at you every time you unlock your phone.
            </p>
          </section>

          <section className="relative py-12 px-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-orange-500/20" />
            <p className="text-2xl md:text-3xl font-serif italic text-zinc-900 dark:text-white text-center">
              "We believe that the most productive thing you can do is forgive
              yourself for yesterday."
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white font-bold text-2xl mb-6">
              The Morning Reset
            </h2>
            <p className="mb-6">
              Today is different. It doesn't care what you didn't do yesterday.
              When the sun rises, your list is empty. The slate is wiped clean.
            </p>
            <p className="mb-6">
              This isn't about deleting your responsibilities. It's about
              intentionality. Any task you didn't finish is moved to{" "}
              <strong>The Drawer</strong>—a quiet space for things that aren't
              for right now.
            </p>
            <p>
              By clearing your view every morning, we force a simple but
              profound question: <em>What actually matters today?</em>
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white font-bold text-2xl mb-6">
              Focus is a Choice
            </h2>
            <p className="mb-6">
              Productivity isn't about volume; it's about clarity. It's better
              to do three things with your full presence than to half-do twenty
              things while feeling guilty about the rest.
            </p>
            <p>
              Today is a tool for the essentialist. For the person who wants to
              reclaim their attention from the noise of "everything" and focus
              on the signal of "now."
            </p>
          </section>

          <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-sm font-medium text-zinc-400 mb-8 uppercase tracking-widest">
              Join the movement
            </p>
            <Link
              to="/"
              className="inline-block bg-linear-to-br from-orange-500 to-amber-500 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-orange-200 dark:shadow-none"
            >
              Start Your Fresh Start
            </Link>
          </footer>
        </div>
      </div>
    </motion.div>
  );
};
