import { Shipment } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, MapPin, Calendar, Truck, Phone } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ShipmentDetailsProps {
    shipment: Shipment;
}

export function ShipmentDetails({ shipment }: ShipmentDetailsProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Sender & Recipient */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base font-semibold flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        Ruta del Envío
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-dashed border-slate-200 space-y-6">
                        <div className="relative">
                            <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-white" />
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Origen</p>
                            <p className="font-medium text-slate-900">{shipment.sender.name}</p>
                            <p className="text-sm text-slate-500">{shipment.sender.address}</p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-green-500 bg-white" />
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Destino</p>
                            <p className="font-medium text-slate-900">{shipment.recipient.name}</p>
                            <p className="text-sm text-slate-500">{shipment.recipient.address}</p>
                            <p className="text-xs text-slate-400 mt-1">RUC: {shipment.recipient.ruc}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Transport & Dates */}
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-semibold flex items-center gap-2">
                            <Truck className="h-4 w-4 text-primary" />
                            Transporte Asignado
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {shipment.driverId ? (
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                                    <User className="h-6 w-6 text-slate-400" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Conductor Asignado</p>
                                    <p className="text-sm text-slate-500">Licencia: A-123456</p>
                                    <div className="mt-2 flex items-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">
                                        <Truck className="h-3 w-3" />
                                        <span>{shipment.vehicleId ? 'Toyota Hilux • ABC-123' : 'Vehículo asignado'}</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-sm text-muted-foreground text-center py-4">
                                Pendiente de asignación
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-semibold flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            Fechas Importantes
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs text-muted-foreground mb-1">Creado</p>
                            <p className="text-sm font-medium">
                                {format(new Date(shipment.dates.created), "d MMM, yyyy", { locale: es })}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground mb-1">Estimado</p>
                            <p className="text-sm font-medium text-blue-600">
                                {format(new Date(shipment.dates.estimatedDelivery), "d MMM, yyyy", { locale: es })}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
