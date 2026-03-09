import React from "react";
import {
  ArchiveIcon,
  BellIcon,
  CalendarIcon,
  HistoryIcon,
  PlusIcon,
  SettingsIcon,
  SidebarIcon,
  SunIcon,
} from "./Icons";

export const MacMockup: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 lg:p-0">
      <div className="relative bg-[#1C1C1E] rounded-3xl shadow-2xl overflow-hidden border border-zinc-800 lg:flex h-175 text-white font-sans antialiased">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-[#151516] flex flex-col h-full border-r border-zinc-800/50 p-4">
          {/* Window Controls & Sidebar Toggle */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80"></div>
            </div>
            <SidebarIcon className="w-5 h-5 text-zinc-500 hover:text-white transition-colors cursor-pointer" />
          </div>

          {/* Nav Items */}
          <div className="space-y-1">
            {[
              {
                label: "Today",
                icon: <SunIcon className="w-5 h-5" />,
                active: true,
              },
              {
                label: "Drawer",
                icon: <ArchiveIcon className="w-5 h-5" />,
                active: false,
              },
              {
                label: "History",
                icon: <HistoryIcon className="w-5 h-5" />,
                active: false,
              },
              {
                label: "Settings",
                icon: <SettingsIcon className="w-5 h-5" />,
                active: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm cursor-pointer ${
                  item.active
                    ? "bg-[#0061E6] text-white shadow-sm"
                    : "text-zinc-300 hover:bg-zinc-800/50 transition-colors"
                }`}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-[#1C1C1E] relative">
          {/* Header */}
          <div className="p-8 pb-4">
            <h2 className="text-zinc-100 text-lg font-semibold mb-8">
              Thursday
            </h2>

            <h1 className="text-5xl font-bold text-white mb-2">Today</h1>
            <p className="text-zinc-400 text-base mb-4">February 19, 2026</p>

            <div className="flex items-center gap-6 text-sm text-zinc-400 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-zinc-500"></div>
                <span>4 remaining</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-zinc-500 flex items-center justify-center">
                  <div className="w-2.5 h-1.5 border-b border-l border-zinc-500 -rotate-45 -mt-0.5"></div>
                </div>
                <span>0 done</span>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {[
                { label: "All", color: null, active: true },
                { label: "Personal", color: "bg-blue-500", active: false },
                { label: "Work", color: "bg-orange-500", active: false },
                { label: "School", color: "bg-purple-500", active: false },
                { label: "Health", color: "bg-green-500", active: false },
              ].map((pill) => (
                <button
                  key={pill.label}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    pill.active
                      ? "bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white"
                      : "bg-[#1C1C1E] border border-zinc-800 hover:bg-[#2C2C2E] text-zinc-400 flex items-center gap-2"
                  }`}
                >
                  {pill.color && (
                    <span
                      className={`w-2 h-2 rounded-full ${pill.color}`}
                    ></span>
                  )}
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Task List */}
          <div className="flex-1 overflow-y-auto px-8 pb-32">
            <div className="space-y-1">
              {[
                {
                  label: "Finish statistics section of the thesis",
                  color: "bg-purple-500",
                  glow: "shadow-[0_0_8px_rgba(168,85,247,0.4)]",
                },
                {
                  label: "Email back professors about thesis review date",
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
                  label: "Finish PlotNeuralNet diagrams",
                  color: "bg-purple-500",
                  glow: "shadow-[0_0_8px_rgba(168,85,247,0.4)]",
                  fromDrawer: true,
                  date: "Feb 20",
                  reminder: "3:30 PM",
                },
              ].map((task) => (
                <div
                  key={task.label}
                  className={`group flex ${task.date ? "items-start" : "items-center"} py-4 border-b border-zinc-800 hover:bg-white/5 -mx-4 px-4 transition-colors rounded-lg`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border border-zinc-500 mr-4 cursor-pointer hover:border-zinc-300 hover:bg-white/10 transition-all ${task.date ? "mt-1" : ""}`}
                  ></div>
                  {task.date ? (
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-lg text-zinc-100">
                          {task.label}
                        </span>
                        {task.fromDrawer && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#3F2C1D] text-[#FF9F0A]">
                            from drawer
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-500">
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
                  ) : task.fromDrawer ? (
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-lg text-zinc-100">
                        {task.label}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#3F2C1D] text-[#FF9F0A]">
                        from drawer
                      </span>
                    </div>
                  ) : (
                    <span className="flex-1 text-lg text-zinc-100">
                      {task.label}
                    </span>
                  )}
                  <div
                    className={`w-3 h-3 rounded-full ${task.color} ${task.glow} ${task.date ? "mt-2" : ""}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Task Button Floating */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none">
            <button className="pointer-events-auto flex items-center gap-2 bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-black/30 border border-white/5 transition-all hover:scale-105 active:scale-95">
              <div className="bg-white rounded-full p-0.5">
                <PlusIcon className="w-3.5 h-3.5 text-black" />
              </div>
              Add task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
