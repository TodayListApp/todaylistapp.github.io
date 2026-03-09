import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsAndConditions: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms and Conditions</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Last updated: March 6, 2026</p>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Today mobile application ("App") and website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">2. Use of the App</h2>
            <p>
              You are responsible for your use of the App and for any content you post or store within it. You agree not to use the App for any illegal or unauthorized purpose.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">3. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the App, including but not limited to text, graphics, logos, and software, are the exclusive property of Today and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">4. Limitation of Liability</h2>
            <p>
              Today is provided "as is" and "as available" without any warranties. We shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the App.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the App after such changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
