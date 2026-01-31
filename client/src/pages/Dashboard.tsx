import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, CalendarDays, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';


export default function Dashboard() {
    const { user } = useAuth();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
        >
            <motion.div variants={item} className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">
                        Good morning, <span className="text-primary">{user?.name}</span> 👋
                    </h1>
                    <p className="text-muted-foreground">Here's what's on your plate for today.</p>
                </div>
                <div className="hidden md:block">
                    <p className="text-sm font-medium text-right text-muted-foreground">
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={item} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    icon={<CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    label="Completed Tasks"
                    value="12"
                    change="+2 from yesterday"
                />
                <StatCard
                    icon={<Clock className="w-5 h-5 text-primary" />}
                    label="Hours Focused"
                    value="4.5h"
                    change="75% to daily goal"
                />
                <StatCard
                    icon={<CalendarDays className="w-5 h-5 text-purple-400" />}
                    label="Upcoming"
                    value="8"
                    change="3 meetings today"
                />
                <StatCard
                    icon={<TrendingUp className="w-5 h-5 text-orange-400" />}
                    label="Efficiency"
                    value="92%"
                    change="Top 5% this week"
                />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Main Focus */}
                <motion.div variants={item} className="md:col-span-2 space-y-6">
                    <Card className="glass-card border-l-4 border-l-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle2 className="w-32 h-32" />
                        </div>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Current Focus
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-2xl font-bold mb-2">Complete Project Proposal</h3>
                            <p className="text-muted-foreground mb-6">Deadline: Today, 5:00 PM</p>
                            <div className="flex gap-3">
                                <Button className="w-fit">Complete Task</Button>
                                <Button variant="outline" className="w-fit">Defer to Tomorrow</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <h3 className="text-xl font-semibold mt-8">Today's Schedule</h3>
                    <div className="space-y-3">
                        {[
                            { time: '10:00 AM', title: 'Team Standup', type: 'meeting' },
                            { time: '11:30 AM', title: 'Deep Work: Coding', type: 'focus' },
                            { time: '2:00 PM', title: 'Client Review', type: 'meeting' },
                        ].map((schedule, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.01 }}
                                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-colors"
                            >
                                <span className="text-sm font-medium text-muted-foreground w-20">{schedule.time}</span>
                                <div className={cn(
                                    "w-2 h-2 rounded-full",
                                    schedule.type === 'focus' ? 'bg-primary' : 'bg-secondary'
                                )} />
                                <span className="font-medium">{schedule.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Side Panel */}
                <motion.div variants={item} className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Productivity Score</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center py-6">
                            <div className="w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center relative">
                                <svg className="w-full h-full absolute top-0 left-0 transform -rotate-90">
                                    <circle
                                        cx="64" cy="64" r="58"
                                        fill="none" stroke="currentColor" strokeWidth="8"
                                        className="text-primary"
                                        strokeDasharray="364"
                                        strokeDashoffset="50" // 364 * (1 - 0.85) roughly
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="text-3xl font-bold">85</span>
                            </div>
                            <p className="mt-4 text-center text-sm text-muted-foreground">
                                Great job! You're maintaining high focus today.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-destructive/10 border-destructive/20">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2 text-destructive">
                                <AlertCircle className="w-4 h-4" />
                                Overdue
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium">Review Q4 Analytics</p>
                            <p className="text-xs text-muted-foreground">Yesterday</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
}

function StatCard({ icon, label, value, change }: any) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-secondary/50 rounded-lg">{icon}</div>
                    <span className="text-xs text-muted-foreground">{change}</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    <h3 className="text-2xl font-bold">{value}</h3>
                </div>
            </CardContent>
        </Card>
    )
}
