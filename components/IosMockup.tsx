import React from "react";
import {
  ArchiveIcon,
  BellIcon,
  CalendarIcon,
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
        <div className="h-12 flex justify-between items-center px-8 pt-4 z-10">
          <span className="text-sm font-semibold tracking-wide">7:17</span>
          <div className="flex gap-1.5 items-center">
            {/* Battery Icon */}
            <div className="w-5 h-2.5 border border-white/50 rounded-sm relative opacity-90">
              <div className="absolute inset-px bg-white rounded-[0.5px] w-3.5"></div>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-1 bg-white/50 rounded-r-sm"></div>
            </div>
          </div>
        </div>

        {/* Top Navigation */}
        <div className="px-6 pt-2 flex flex-col items-center">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">
            Monday
          </span>
          <div className="w-full flex justify-end gap-4 mb-2">
            <button className="bg-[#1C1C1E] active:bg-[#2C2C2E] hover:bg-[#2C2C2E] p-2.5 rounded-full transition-colors">
              <SettingsIcon className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="px-6 mb-6">
          <h1 className="text-4xl font-bold text-white mb-1 tracking-tight">
            Today
          </h1>
          <p className="text-zinc-500 text-lg mb-4">March 9, 2026</p>

          <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded-full border border-zinc-500"></div>
              <span>4 remaining</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded-full border border-zinc-500 flex items-center justify-center">
                <div className="w-2.5 h-1.5 border-b border-l border-zinc-500 -rotate-45 -mt-0.5"></div>
              </div>
              <span>0 done</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="px-6 flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { label: "All", color: null, active: true },
            { label: "Personal", color: "bg-blue-500", active: false },
            { label: "Work", color: "bg-orange-500", active: false },
            { label: "School", color: "bg-purple-500", active: false },
            { label: "Health", color: "bg-green-500", active: false },
          ].map((pill) => (
            <button
              key={pill.label}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors active:scale-95 ${
                pill.active
                  ? "bg-[#2C2C2E] text-white"
                  : "bg-[#1C1C1E] border border-zinc-800 text-zinc-400 active:bg-[#2C2C2E] flex items-center gap-2"
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
        <div className="flex-1 overflow-y-auto px-6 pb-28">
          <div className="space-y-1">
            {[
              {
                label: "Finish statistics section",
                color: "bg-purple-500",
                glow: "shadow-[0_0_8px_rgba(168,85,247,0.4)]",
              },
              {
                label: "Email professors about review",
                color: "bg-purple-500",
                glow: "shadow-[0_0_8px_rgba(168,85,247,0.4)]",
              },
              {
                label: "Fix Telus Sim",
                color: "bg-blue-500",
                glow: "shadow-[0_0_8px_rgba(59,130,246,0.4)]",
                fromDrawer: true,
              },
              {
                label: "Morning run",
                color: "bg-green-500",
                glow: "shadow-[0_0_8px_rgba(34,197,94,0.4)]",
                date: "Today",
                reminder: "8:00 AM",
              },
            ].map((task) => (
              <div
                key={task.label}
                className={`group flex ${task.date ? "items-start" : "items-center"} py-4 border-b border-zinc-800/50 hover:bg-white/5 active:bg-white/10 -mx-4 px-4 transition-colors rounded-2xl cursor-pointer`}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 border-zinc-600 mr-4 shrink-0 transition-colors group-hover:border-zinc-400 group-active:bg-white/10 ${task.date ? "mt-0.5" : ""}`}
                ></div>
                {task.date ? (
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[15px] font-medium text-zinc-100 truncate">
                        {task.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-zinc-500 font-medium">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        {task.date}
                      </div>
                      {task.reminder && (
                        <div className="flex items-center gap-1">
                          <BellIcon className="w-3.5 h-3.5" />
                          {task.reminder}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 min-w-0 pr-2 flex flex-col justify-center">
                    <span className="text-[15px] font-medium text-zinc-100 truncate block">
                      {task.label}
                    </span>
                    {task.fromDrawer && (
                      <div className="mt-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#3F2C1D] text-[#FF9F0A] uppercase tracking-wider">
                          From Drawer
                        </span>
                      </div>
                    )}
                  </div>
                )}
                <div
                  className={`w-2.5 h-2.5 rounded-full ${task.color} ${task.glow} shrink-0 ${task.date ? "mt-2" : ""}`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Add Task */}
        <div className="absolute bottom-26 left-0 right-0 flex justify-center pointer-events-none z-10">
          <button className="pointer-events-auto bg-[#2C2C2E] hover:bg-[#3A3A3C] active:bg-[#4A4A4C] text-white px-6 py-3.5 rounded-full font-semibold flex items-center gap-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer">
            <div className="bg-white rounded-full p-0.5">
              <PlusIcon className="w-3.5 h-3.5 text-black" />
            </div>
            Add task
          </button>
        </div>

        {/* Tab Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#151516]/90 backdrop-blur-xl border-t border-zinc-800 px-6 pt-3 pb-8 flex justify-between items-center z-20">
          {[
            {
              label: "Today",
              icon: <SunIcon className="w-6 h-6" />,
              active: true,
            },
            {
              label: "Drawer",
              icon: <ArchiveIcon className="w-6 h-6" />,
              active: false,
            },
            {
              label: "History",
              icon: <HistoryIcon className="w-6 h-6" />,
              active: false,
            },
          ].map((tab) => (
            <button
              key={tab.label}
              className={`flex-1 flex flex-col items-center gap-1.5 transition-colors cursor-pointer ${
                tab.active
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-400 active:text-zinc-300"
              }`}
            >
              {tab.active ? (
                <div className="bg-[#2C2C2E] p-2 rounded-2xl px-6">
                  {tab.icon}
                </div>
              ) : (
                <div className="p-2">{tab.icon}</div>
              )}
              <span className="text-[10px] font-bold tracking-wide">
                {tab.label}
              </span>
            </button>
          ))}
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
