import { CheckCircle2, Clock, Truck, AlertTriangle, XCircle, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TrackingEvent, ShipmentStatus } from '@/lib/types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface TimelineProps {
    events: TrackingEvent[];
    currentStatus: ShipmentStatus;
}

const getStatusIcon = (status: ShipmentStatus) => {
    switch (status) {
        case 'ENVIADO': return Package;
        case 'PROGRAMADO': return Clock;
        case 'EN_CAMINO': return Truck;
        case 'REPROGRAMADO': return AlertTriangle;
        case 'ENTREGADO': return CheckCircle2;
        case 'CANCELADO': return XCircle;
        default: return Package;
    }
};

const getStatusColor = (status: ShipmentStatus) => {
    switch (status) {
        case 'ENVIADO': return 'bg-blue-100 text-blue-600 border-blue-200';
        case 'PROGRAMADO': return 'bg-purple-100 text-purple-600 border-purple-200';
        case 'EN_CAMINO': return 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200';
        case 'REPROGRAMADO': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
        case 'ENTREGADO': return 'bg-green-100 text-green-600 border-green-200';
        case 'CANCELADO': return 'bg-red-100 text-red-600 border-red-200';
        default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
};

export function Timeline({ events }: TimelineProps) {
    // Sort events by timestamp descending (newest first)
    const sortedEvents = [...events].sort((a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return (
        <div className="relative space-y-8 pl-8 before:absolute before:inset-0 before:ml-3.5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-slate-200 before:to-slate-50">
            {sortedEvents.map((event, index) => {
                const Icon = getStatusIcon(event.status);
                const isLatest = index === 0;

                return (
                    <div key={event.id} className="relative group">
                        <div className={cn(
                            "absolute -left-[42px] top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                            getStatusColor(event.status),
                            isLatest ? "scale-110 ring-4 ring-white" : "bg-white"
                        )}>
                            <Icon className={cn("h-5 w-5", isLatest ? "" : "opacity-70")} />
                        </div>

                        <div className={cn(
                            "rounded-xl border p-5 transition-all duration-300 hover:shadow-md",
                            isLatest ? "bg-white border-blue-100 shadow-sm" : "bg-slate-50/50 border-slate-100 opacity-80"
                        )}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                <h3 className="font-semibold text-slate-900">
                                    {event.status.replace('_', ' ')}
                                </h3>
                                <time className="text-sm text-muted-foreground font-medium">
                                    {format(new Date(event.timestamp), "d 'de' MMMM, yyyy - h:mm a", { locale: es })}
                                </time>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                {event.description}
                            </p>

                            {event.imageUrl && (
                                <div className="mt-4">
                                    <img
                                        src={event.imageUrl}
                                        alt="Prueba de entrega"
                                        className="rounded-lg border border-slate-200 w-full max-w-[200px] h-auto object-cover hover:scale-105 transition-transform cursor-pointer"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
