import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Navigation, Clock } from 'lucide-react';
import { MOCK_SHIPMENTS } from '@/lib/mock-data';

export default function DriverShipmentsPage() {
    // Filter shipments for "Carlos Mendoza" (d1)
    const myShipments = MOCK_SHIPMENTS.filter(s => s.driverId === 'd1' && s.status !== 'ENTREGADO');

    return (
        <div className="space-y-4">
            <h1 className="text-xl font-bold text-slate-900">Envíos Asignados</h1>

            {myShipments.map(shipment => (
                <Card key={shipment.id} className="overflow-hidden border-none shadow-md">
                    <div className="bg-blue-600 p-3 text-white flex justify-between items-center">
                        <span className="font-mono text-sm font-medium">{shipment.trackingNumber}</span>
                        <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                            {shipment.status.replace('_', ' ')}
                        </Badge>
                    </div>
                    <CardContent className="p-4 space-y-4">
                        <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-slate-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="font-semibold text-slate-900">{shipment.recipient.name}</p>
                                <p className="text-sm text-slate-600">{shipment.recipient.address}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-slate-600">
                            <Clock className="h-4 w-4 text-slate-400" />
                            <span>Entrega est: 14:00 - 16:00</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <Button variant="outline" className="w-full">
                                <Phone className="mr-2 h-4 w-4" />
                                Llamar
                            </Button>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                <Navigation className="mr-2 h-4 w-4" />
                                Ir
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}

            {myShipments.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    No tienes envíos pendientes.
                </div>
            )}
        </div>
    );
}
