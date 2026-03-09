import React, { useEffect, useState } from "react";
import { generateSampleTasks } from "../services/geminiService";
import {
  ArchiveIcon,
  CheckIcon,
  PlusIcon,
  RefreshCwIcon,
  SparklesIcon,
  SunIcon,
} from "./Icons";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  isNew?: boolean;
}

const DEFAULT_TODAY: Task[] = [
  { id: "1", title: "Design landing page", completed: false },
  { id: "2", title: "Call insurance", completed: true },
  { id: "3", title: "Buy groceries", completed: false },
];

const DEFAULT_DRAWER: Task[] = [
  { id: "4", title: 'Read "Atomic Habits"', completed: false },
  { id: "5", title: "Fix bike tire", completed: false },
];

export const InteractiveDemo: React.FC = () => {
  const [todayTasks, setTodayTasks] = useState<Task[]>(DEFAULT_TODAY);
  const [drawerTasks, setDrawerTasks] = useState<Task[]>(DEFAULT_DRAWER);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activePersona, setActivePersona] = useState<string>("Designer");
  const [showConfetti, setShowConfetti] = useState(false);

  // Sound effect simulation (optional visual cue)
  const playClick = () => {
    // In a real app we might play audio, here we just trigger a tiny visual interaction if needed
  };

  const toggleTask = (id: string) => {
    playClick();
    setTodayTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const newState = !t.completed;
          if (newState) {
            // Trigger confetti if all tasks are done
            const allOthersDone = prev
              .filter((pt) => pt.id !== id)
              .every((pt) => pt.completed);
            if (allOthersDone) setShowConfetti(true);
          }
          return { ...t, completed: newState };
        }
        return t;
      }),
    );
  };

  const moveToDrawer = (id: string) => {
    const task = todayTasks.find((t) => t.id === id);
    if (!task) return;
    setTodayTasks((prev) => prev.filter((t) => t.id !== id));
    setDrawerTasks((prev) => [
      { ...task, completed: false, isNew: true },
      ...prev,
    ]);
  };

  const moveToToday = (id: string) => {
    const task = drawerTasks.find((t) => t.id === id);
    if (!task) return;
    setDrawerTasks((prev) => prev.filter((t) => t.id !== id));
    setTodayTasks((prev) => [...prev, { ...task, isNew: true }]);
  };

  const simulateNewDay = () => {
    // 1. Move all incomplete today tasks to drawer
    const incomplete = todayTasks
      .filter((t) => !t.completed)
      .map((t) => ({ ...t, isNew: true }));
    // 2. Clear completed tasks
    // 3. Today becomes empty (Clean Slate)

    setDrawerTasks((prev) => [...incomplete, ...prev]);
    setTodayTasks([]);
    setShowConfetti(false);
  };

  const generateAITasks = async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    // Simulate loading state for a bit
    setTodayTasks([]);

    const tasks = await generateSampleTasks(activePersona);
    const newTasks: Task[] = tasks.map((t, i) => ({
      id: `ai-${Date.now()}-${i}`,
      title: t.title,
      completed: false,
      isNew: true,
    }));

    setTodayTasks(newTasks);
    setIsGenerating(false);
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 lg:p-0">
      <div className="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 lg:flex h-175">
        {/* Phone UI Container */}
        <div className="relative w-full lg:w-1/2 bg-zinc-50 dark:bg-zinc-950 flex flex-col h-full border-r border-zinc-100 dark:border-zinc-800">
          {/* Header */}
          <div className="pt-8 pb-4 px-6 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center sticky top-0 z-10">
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                Today
              </p>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Wednesday 24
              </h2>
            </div>
            <button
              onClick={simulateNewDay}
              className="p-2.5 bg-linear-to-br from-orange-500 to-amber-500 hover:scale-110 active:scale-95 rounded-full transition-all text-white shadow-lg shadow-orange-500/20"
              title="Simulate New Day (Reset)"
            >
              <SunIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Today List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar">
            {todayTasks.length === 0 && !isGenerating && (
              <div className="flex flex-col items-center justify-center h-48 text-zinc-400">
                <SunIcon className="w-12 h-12 mb-3 opacity-20" />
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  No tasks for today.
                </p>
                <p className="text-xs text-orange-500 font-medium">
                  Enjoy your fresh start.
                </p>
              </div>
            )}

            {isGenerating && (
              <div className="space-y-3 animate-pulse">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-14 bg-zinc-200 dark:bg-zinc-800 rounded-xl w-full"
                  ></div>
                ))}
              </div>
            )}

            {todayTasks.map((task) => (
              <div
                key={task.id}
                className={`group flex items-center p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 transition-all duration-300 ${task.completed ? "opacity-50 grayscale" : "hover:border-zinc-300 dark:hover:border-zinc-700"}`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors mr-3 ${task.completed ? "bg-blue-500 border-blue-500" : "border-zinc-300 dark:border-zinc-700 hover:border-blue-400"}`}
                >
                  {task.completed && (
                    <CheckIcon className="w-4 h-4 text-white" />
                  )}
                </button>
                <span
                  className={`flex-1 text-sm font-medium ${task.completed ? "line-through text-zinc-400" : "text-zinc-800 dark:text-zinc-100"}`}
                >
                  {task.title}
                </span>
                {!task.completed && (
                  <button
                    onClick={() => moveToDrawer(task.id)}
                    className="opacity-0 group-hover:opacity-100 p-2 text-zinc-400 hover:text-orange-500 transition-opacity"
                    title="Move to Drawer"
                  >
                    <ArchiveIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Quick Input Bar (Visual Only) */}
          <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center bg-zinc-50 dark:bg-zinc-950 rounded-full px-4 py-3 border border-zinc-200 dark:border-zinc-800">
              <PlusIcon className="w-5 h-5 text-zinc-400 mr-2" />
              <input
                type="text"
                placeholder="Add a new task..."
                className="bg-transparent w-full outline-none text-sm text-zinc-700 dark:text-zinc-300 placeholder-zinc-400"
                disabled
              />
            </div>
          </div>
        </div>

        {/* The Drawer (Side Panel / Overlay in mobile, separate col in desktop) */}
        <div className="relative w-full lg:w-1/2 bg-zinc-900 text-zinc-300 flex flex-col h-full overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

          <div className="p-8 border-b border-zinc-800 flex justify-between items-center z-10">
            <div>
              <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-1">
                The Drawer
              </p>
              <h3 className="text-xl font-bold text-white">Backlog & Ideas</h3>
            </div>
            <div className="bg-zinc-800 text-xs px-2 py-1 rounded text-zinc-400">
              {drawerTasks.length} items
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar z-10">
            <p className="text-sm text-zinc-500 mb-4">
              Items left incomplete yesterday automatically land here. Drag them
              out when you're ready.
            </p>

            {drawerTasks.length === 0 && (
              <div className="text-center py-10 text-zinc-600 italic">
                Drawer is empty. You're all caught up!
              </div>
            )}

            {drawerTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl border border-zinc-800 group hover:border-zinc-700 transition-colors"
              >
                <span className="text-zinc-300 text-sm">{task.title}</span>
                <button
                  onClick={() => moveToToday(task.id)}
                  className="text-xs font-medium text-orange-400 hover:text-orange-300 flex items-center bg-orange-400/10 px-3 py-1.5 rounded-full transition-colors"
                >
                  <PlusIcon className="w-3 h-3 mr-1" />
                  Today
                </button>
              </div>
            ))}
          </div>

          {/* AI Generator Control Panel */}
          <div className="p-6 bg-zinc-800 border-t border-zinc-700 z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase">
                AI Quick Plan
              </span>
              <SparklesIcon className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex gap-2 mb-3">
              {["Designer", "Developer", "Founder"].map((role) => (
                <button
                  key={role}
                  onClick={() => setActivePersona(role)}
                  className={`flex-1 text-xs py-2 rounded-lg border transition-all ${
                    activePersona === role
                      ? "bg-zinc-700 border-zinc-600 text-white shadow-sm"
                      : "border-zinc-700 text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
            <button
              onClick={generateAITasks}
              disabled={isGenerating}
              className="w-full py-3 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-semibold rounded-xl flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-900/20"
            >
              {isGenerating ? (
                <>
                  <RefreshCwIcon className="w-4 h-4 mr-2 animate-spin" />
                  Planning your day...
                </>
              ) : (
                <>Generate Sample Day</>
              )}
            </button>
          </div>
        </div>

        {/* Confetti Overlay */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
            <div className="text-6xl animate-bounce">🎉</div>
          </div>
        )}
      </div>
    </div>
  );
};
