"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MOCK_SHIPMENTS } from "@/lib/mock-data";
import { Map, Truck, CalendarClock } from "lucide-react";
import dynamic from 'next/dynamic';

const RouteMap = dynamic(() => import('@/components/admin/routes/RouteMap'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-slate-100 animate-pulse rounded-lg flex items-center justify-center text-slate-400">Cargando mapa...</div>
});

export default function RoutesPage() {
    const activeShipments = MOCK_SHIPMENTS.filter(
        s => s.status === 'EN_CAMINO' || s.status === 'PROGRAMADO'
    );

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Rutas Activas</h1>
                <p className="text-muted-foreground">Monitoreo en tiempo real de la flota.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                {/* Sidebar List */}
                <Card className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Truck className="h-5 w-5" />
                            Envíos en Curso ({activeShipments.length})
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 p-0">
                        <ScrollArea className="h-[calc(100vh-16rem)]">
                            <div className="divide-y">
                                {activeShipments.map((shipment) => (
                                    <div key={shipment.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-mono text-xs font-medium text-slate-500">
                                                {shipment.trackingNumber}
                                            </span>
                                            <Badge variant={shipment.status === 'EN_CAMINO' ? 'default' : 'secondary'}>
                                                {shipment.status.replace('_', ' ')}
                                            </Badge>
                                        </div>
                                        <h4 className="font-medium text-sm mb-1">{shipment.recipient.name}</h4>
                                        <p className="text-xs text-slate-500 line-clamp-2 mb-2">
                                            {shipment.recipient.address}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <CalendarClock className="h-3 w-3" />
                                            <span>Est. {new Date(shipment.dates.estimatedDelivery).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* Map Container */}
                <Card className="lg:col-span-2 h-full overflow-hidden border-0 shadow-none bg-transparent">
                    <div className="h-full w-full rounded-xl border bg-white shadow-sm overflow-hidden">
                        <RouteMap />
                    </div>
                </Card>
            </div>
        </div>
    );
}
