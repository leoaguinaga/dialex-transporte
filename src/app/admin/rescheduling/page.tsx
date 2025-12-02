"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, CalendarClock } from 'lucide-react';
import { MOCK_SHIPMENTS } from '@/lib/mock-data';

export default function ReschedulingPage() {
    // Filter only rescheduled shipments for demo
    const rescheduledShipments = MOCK_SHIPMENTS.filter(s => s.status === 'REPROGRAMADO');

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Gestión de Reprogramaciones</h1>
                <p className="text-muted-foreground">Solicitudes de cambio de fecha reportadas por conductores.</p>
            </div>

            <div className="grid gap-6">
                {rescheduledShipments.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg border border-dashed">
                        <p className="text-muted-foreground">No hay solicitudes pendientes.</p>
                    </div>
                ) : (
                    rescheduledShipments.map(shipment => (
                        <Card key={shipment.id} className="overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="bg-yellow-50 p-6 flex flex-col items-center justify-center min-w-[150px] border-r border-yellow-100">
                                    <CalendarClock className="h-8 w-8 text-yellow-600 mb-2" />
                                    <span className="text-sm font-bold text-yellow-700">Pendiente</span>
                                </div>
                                <div className="flex-1 p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold text-lg">{shipment.trackingNumber}</h3>
                                            <p className="text-sm text-muted-foreground">{shipment.recipient.name}</p>
                                        </div>
                                        <Badge variant="outline">Conductor: Carlos Mendoza</Badge>
                                    </div>

                                    <div className="bg-slate-50 p-4 rounded-lg mb-6">
                                        <p className="text-sm font-medium text-slate-900 mb-1">Motivo del reporte:</p>
                                        <p className="text-sm text-slate-600">
                                            "Cliente no se encontraba en el domicilio. Se intentó contactar 3 veces sin respuesta."
                                        </p>
                                    </div>

                                    <div className="flex gap-3 justify-end">
                                        <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                                            <X className="mr-2 h-4 w-4" />
                                            Rechazar
                                        </Button>
                                        <Button className="bg-green-600 hover:bg-green-700">
                                            <Check className="mr-2 h-4 w-4" />
                                            Aprobar Nueva Fecha
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
