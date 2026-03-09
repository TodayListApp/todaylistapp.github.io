import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-32 pb-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Last updated: March 6, 2026
          </p>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">
              1. Introduction
            </h2>
            <p>
              Today ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you use our mobile application and
              website.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">
              2. Information We Collect
            </h2>
            <p>
              <strong>Today is designed with privacy in mind.</strong> We do not
              collect personal data such as your name, email address, or
              location unless you explicitly provide it to us (e.g., for support
              requests).
            </p>
            <ul className="pt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Local Data:</strong> Your tasks and categories are
                stored locally on your device and synced via your private iCloud
                account. We do not have access to this data.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect anonymous telemetry
                data to improve app performance and stability.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="pt-3 list-disc pl-6 space-y-2">
              <li>Provide and maintain the app functionality.</li>
              <li>Improve and personalize your experience.</li>
              <li>Monitor and analyze usage trends.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              data. Since most of your data is stored on your device or in your
              personal iCloud, the security of your data also depends on your
              device security and Apple ID protection.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at: <br />
              <span className="text-zinc-900 dark:text-white font-medium">
                mr.k779@outlook.com
              </span>
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
