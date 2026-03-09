import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IosMockup } from "./IosMockup";
import { MacMockup } from "./MacMockup";

export const MockupCarousel: React.FC = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setIndex((prev) => (prev === 0 ? 1 : 0));
    // }, 5000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative h-187.5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {index === 0 ? (
              <motion.div
                key="macos"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="text-center mb-8">
                  <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    MacOS Desktop
                  </span>
                </div>
                <MacMockup />
              </motion.div>
            ) : (
              <motion.div
                key="ios"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="text-center mb-8">
                  <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    iOS Mobile
                  </span>
                </div>
                <IosMockup />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={() => setIndex(0)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === 0 ? "w-8 bg-orange-500" : "w-2 bg-zinc-300 dark:bg-zinc-700"}`}
          />
          <button
            onClick={() => setIndex(1)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === 1 ? "w-8 bg-orange-500" : "w-2 bg-zinc-300 dark:bg-zinc-700"}`}
          />
        </div>
      </div>
    </div>
  );
};
