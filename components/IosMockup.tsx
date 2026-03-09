import React from "react";
import {
  ArchiveIcon,
  HistoryIcon,
  PlusIcon,
  SettingsIcon,
  SunIcon,
} from "./Icons";

export const IosMockup: React.FC = () => {
  return (
    <div className="w-full max-w-83 mx-auto p-4 lg:p-0">
      <div className="relative bg-black rounded-[3rem] shadow-2xl overflow-hidden border-8 border-zinc-800 aspect-9/19.5 text-white font-sans antialiased flex flex-col">
        {/* Status Bar Area */}
        <div className="h-12 flex justify-between items-center px-8 pt-4">
          <span className="text-sm font-semibold">7:17</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-2.5 border border-white/40 rounded-sm relative">
              <div className="absolute inset-px bg-white rounded-[0.5px] w-2.5"></div>
            </div>
          </div>
        </div>

        {/* Top Navigation */}
        <div className="px-6 pt-2 flex flex-col items-center">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">
            Monday
          </span>
          <div className="w-full flex justify-end gap-4 mb-2">
            <div className="bg-zinc-800/50 p-2 rounded-full">
              <SettingsIcon className="w-5 h-5 text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="px-6 mb-6">
          <h1 className="text-4xl font-bold text-white mb-1">Today</h1>
          <p className="text-zinc-500 text-lg mb-4">March 9, 2026</p>

          <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded-full border border-zinc-600"></div>
              <span>4 remaining</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded-full border border-zinc-600 flex items-center justify-center">
                <div className="w-2 h-1 border-b border-l border-zinc-600 -rotate-45 -mt-0.5"></div>
              </div>
              <span>0 done</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="px-6 flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
          {[
            { label: "All", color: null, active: true },
            { label: "Personal", color: "bg-blue-500", active: false },
            { label: "Work", color: "bg-orange-500", active: false },
            { label: "School", color: "bg-purple-500", active: false },
            { label: "Health", color: "bg-emerald-500", active: false },
          ].map((pill) => (
            <button
              key={pill.label}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                pill.active
                  ? "bg-zinc-800 text-white"
                  : "bg-zinc-900/50 border border-zinc-800 text-zinc-400 flex items-center gap-2"
              }`}
            >
              {pill.color && (
                <span className={`w-2 h-2 rounded-full ${pill.color}`}></span>
              )}
              {pill.label}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="flex-1 px-6 space-y-6">
          {[
            { label: "Review pull requests", color: "bg-orange-500" },
            { label: "Buy groceries", color: "bg-red-500" },
            { label: "Read 30 pages", color: "bg-blue-500" },
            { label: "Morning run", color: "bg-green-500" },
          ].map((task) => (
            <div key={task.label} className="flex items-center group">
              <div className="w-7 h-7 rounded-full border-2 border-zinc-700 mr-4"></div>
              <span className="flex-1 text-base font-medium text-zinc-100">
                {task.label}
              </span>
              <div className={`w-2.5 h-2.5 rounded-full ${task.color}`}></div>
            </div>
          ))}
        </div>

        {/* Floating Add Task */}
        <div className="px-6 pb-4 flex justify-center">
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95">
            <div className="bg-white rounded-full p-0.5">
              <PlusIcon className="w-3 h-3 text-black" />
            </div>
            Add task
          </button>
        </div>

        {/* Tab Bar */}
        <div className="bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800/50 px-6 pt-3 pb-8 flex justify-between items-center">
          {[
            {
              label: "Today",
              icon: <SunIcon className="w-6 h-6 text-white" />,
              active: true,
            },
            {
              label: "Drawer",
              icon: <ArchiveIcon className="w-6 h-6 text-white" />,
              active: false,
            },
            {
              label: "History",
              icon: <HistoryIcon className="w-6 h-6 text-white" />,
              active: false,
            },
          ].map((tab) => (
            <div
              key={tab.label}
              className={`flex flex-col items-center gap-1 ${tab.active ? "" : "opacity-40"}`}
            >
              {tab.active ? (
                <div className="bg-zinc-800 p-2 rounded-3xl px-8">
                  {tab.icon}
                </div>
              ) : (
                tab.icon
              )}
              <span className="text-[10px] font-bold text-white">
                {tab.label}
              </span>
            </div>
          ))}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};
