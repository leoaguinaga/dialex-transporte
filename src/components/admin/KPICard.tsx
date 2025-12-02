import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPICardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
    color?: 'blue' | 'green' | 'yellow' | 'purple' | 'red';
}

export function KPICard({ title, value, icon: Icon, trend, trendUp, color = 'blue' }: KPICardProps) {
    const colorStyles = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        yellow: 'bg-yellow-50 text-yellow-600',
        purple: 'bg-purple-50 text-purple-600',
        red: 'bg-red-50 text-red-600',
    };

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
                        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
                    </div>
                    <div className={cn("p-3 rounded-xl", colorStyles[color])}>
                        <Icon className="h-6 w-6" />
                    </div>
                </div>
                {trend && (
                    <div className="mt-4 flex items-center text-xs">
                        <span className={cn(
                            "font-medium mr-2",
                            trendUp ? "text-green-600" : "text-red-600"
                        )}>
                            {trend}
                        </span>
                        <span className="text-muted-foreground">vs mes anterior</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
