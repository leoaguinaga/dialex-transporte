import { KPICard } from '@/components/admin/KPICard';
import { Package, Truck, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { MOCK_SHIPMENTS } from '@/lib/mock-data';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard General</h1>
                <p className="text-muted-foreground">Resumen de operaciones y métricas clave.</p>
            </div>

            {/* KPI Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <KPICard
                    title="Total Envíos"
                    value="1,248"
                    icon={Package}
                    trend="+12.5%"
                    trendUp={true}
                    color="blue"
                />
                <KPICard
                    title="En Camino"
                    value="45"
                    icon={Truck}
                    color="purple"
                />
                <KPICard
                    title="Entregados (Mes)"
                    value="892"
                    icon={CheckCircle2}
                    trend="+4.3%"
                    trendUp={true}
                    color="green"
                />
                <KPICard
                    title="Reprogramados"
                    value="12"
                    icon={AlertTriangle}
                    trend="-2.1%"
                    trendUp={true}
                    color="yellow"
                />
            </div>

            {/* Recent Shipments Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Envíos Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tracking ID</TableHead>
                                <TableHead>Destinatario</TableHead>
                                <TableHead>Fecha</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead>Conductor</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {MOCK_SHIPMENTS.map((shipment) => (
                                <TableRow key={shipment.id}>
                                    <TableCell className="font-medium">{shipment.trackingNumber}</TableCell>
                                    <TableCell>{shipment.recipient.name}</TableCell>
                                    <TableCell>
                                        {format(new Date(shipment.dates.created), "d MMM yyyy", { locale: es })}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={shipment.status === 'ENTREGADO' ? 'default' : 'secondary'}>
                                            {shipment.status.replace('_', ' ')}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{shipment.driverId ? 'Asignado' : 'Pendiente'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
