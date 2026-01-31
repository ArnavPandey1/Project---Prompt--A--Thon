import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Plus } from 'lucide-react';
import { Button } from '../components/ui/button';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Planner() {
    const [selectedDay, setSelectedDay] = useState('Mon');

    // Mock data for weekly planner
    const weeklyTasks: Record<string, string[]> = {
        'Mon': ['Team Standup', 'Project Research', 'Client Call'],
        'Tue': ['Design Review', 'Coding Session'],
        'Wed': ['Mid-week Sync', 'Write Documentation'],
        'Thu': ['Testing Phase', 'Bug Fixes'],
        'Fri': ['Deployment', 'Weekly Retro'],
        'Sat': ['Learning', 'Side Project'],
        'Sun': ['Rest', 'Plan Next Week'],
    };

    return (
        <div className="h-full flex flex-col">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Weekly Planner</h1>
                <p className="text-muted-foreground">Visualize and organize your entire week.</p>
            </div>

            <div className="flex-1 overflow-x-auto pb-4">
                <div className="min-w-[800px] grid grid-cols-7 gap-4 h-[600px]">
                    {DAYS.map((day) => (
                        <motion.div
                            key={day}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "rounded-xl border border-border bg-card/50 flex flex-col overflow-hidden transition-colors",
                                day === selectedDay ? "ring-2 ring-primary bg-card" : "hover:bg-card/80"
                            )}
                            onClick={() => setSelectedDay(day)}
                        >
                            <div className={cn(
                                "p-3 text-center border-b border-border font-semibold",
                                day === selectedDay ? "bg-primary text-primary-foreground" : "bg-secondary/50"
                            )}>
                                {day}
                            </div>
                            <div className="p-3 flex-1 flex flex-col gap-2">
                                {weeklyTasks[day]?.map((task, i) => (
                                    <div key={i} className="bg-background/80 p-2 rounded text-sm border border-border shadow-sm">
                                        {task}
                                    </div>
                                ))}
                                <Button variant="ghost" size="sm" className="mt-auto w-full border-dashed border border-border text-muted-foreground hover:text-foreground">
                                    <Plus className="w-3 h-3 mr-1" /> Add
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
