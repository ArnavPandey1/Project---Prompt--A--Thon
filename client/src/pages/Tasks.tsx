import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Calendar as CalendarIcon, Check } from 'lucide-react';
import { cn } from '../lib/utils';

type Task = {
    id: string;
    title: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
};

const INITIAL_TASKS: Task[] = [
    { id: '1', title: 'Review Marketing Deck', completed: false, priority: 'high', dueDate: '2023-10-25' },
    { id: '2', title: 'Update Client Contract', completed: true, priority: 'medium', dueDate: '2023-10-24' },
    { id: '3', title: 'Weekly Sync Prep', completed: false, priority: 'low', dueDate: '2023-10-26' },
];

export default function Tasks() {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
    const [newTask, setNewTask] = useState('');

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        const task: Task = {
            id: Math.random().toString(36).substr(2, 9),
            title: newTask,
            completed: false,
            priority: 'medium',
            dueDate: new Date().toISOString().split('T')[0],
        };

        setTasks([task, ...tasks]);
        setNewTask('');
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Task Manager</h1>
                    <p className="text-muted-foreground">Manage your detailed tasks and priorities.</p>
                </div>
                <div className="flex gap-2">
                    <span className="text-sm text-muted-foreground self-end mb-1">
                        {tasks.filter(t => t.completed).length}/{tasks.length} Completed
                    </span>
                </div>
            </div>

            <Card className="mb-8 border-primary/20 bg-secondary/10">
                <CardContent className="pt-6">
                    <form onSubmit={addTask} className="flex gap-4">
                        <Input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add a new task..."
                            className="flex-1 bg-background"
                        />
                        <Button type="submit">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Task
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                    {tasks.map((task) => (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            layout
                        >
                            <Card className={cn(
                                "group transition-colors hover:border-primary/50",
                                task.completed && "opacity-60 bg-secondary/20"
                            )}>
                                <CardContent className="p-4 flex items-center gap-4">
                                    <SimpleCheckbox
                                        checked={task.completed}
                                        onCheckedChange={() => toggleTask(task.id)}
                                    />

                                    <div className="flex-1 min-w-0">
                                        <p className={cn(
                                            "text-base font-medium truncate transition-all",
                                            task.completed && "line-through text-muted-foreground"
                                        )}>
                                            {task.title}
                                        </p>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                                            <span className={cn(
                                                "px-2 py-0.5 rounded-full capitalize bg-secondary",
                                                task.priority === 'high' && "text-destructive bg-destructive/10",
                                                task.priority === 'medium' && "text-orange-400 bg-orange-400/10",
                                                task.priority === 'low' && "text-green-400 bg-green-400/10",
                                            )}>
                                                {task.priority}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <CalendarIcon className="w-3 h-3" />
                                                {new Date(task.dueDate).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive"
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {tasks.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <p>No tasks yet. Add one above to get started!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function SimpleCheckbox({ checked, onCheckedChange }: { checked: boolean, onCheckedChange: () => void }) {
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            onClick={onCheckedChange}
            className={cn(
                "w-6 h-6 rounded-md border flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                checked ? "bg-primary border-primary text-primary-foreground" : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
            )}
        >
            {checked && <Check className="w-4 h-4" />}
        </button>
    )
}
