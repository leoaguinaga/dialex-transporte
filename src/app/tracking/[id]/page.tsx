import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Timeline } from '@/components/tracking/Timeline';
import { ShipmentDetails } from '@/components/tracking/ShipmentDetails';
import { MOCK_SHIPMENTS } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Printer } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

// In a real app, this would fetch data from an API
async function getShipment(id: string) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Find mock shipment (case insensitive)
    return MOCK_SHIPMENTS.find(s =>
        s.trackingNumber.toLowerCase() === id.toLowerCase() ||
        s.referenceInvoice.toLowerCase() === id.toLowerCase()
    );
}

export default async function TrackingResultPage({ params }: PageProps) {
    const { id } = await params;
    const shipment = await getShipment(id);

    if (!shipment) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                    <h1 className="text-2xl font-bold mb-2">Envío no encontrado</h1>
                    <p className="text-muted-foreground mb-6">No pudimos encontrar un envío con el número {id}</p>
                    <Link href="/tracking">
                        <Button>Intentar nuevamente</Button>
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-1 py-8">
                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Breadcrumb / Back */}
                    <div className="mb-6 flex items-center justify-between">
                        <Link href="/tracking" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver a búsqueda
                        </Link>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="hidden sm:flex">
                                <Printer className="mr-2 h-4 w-4" />
                                Imprimir
                            </Button>
                            <Button variant="outline" size="sm">
                                <Share2 className="mr-2 h-4 w-4" />
                                Compartir
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Status & Timeline */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Número de seguimiento</p>
                                        <h1 className="text-2xl font-bold text-slate-900">{shipment.trackingNumber}</h1>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="text-sm text-muted-foreground mb-1">Estado actual</p>
                                        <Badge className="text-base px-4 py-1" variant={shipment.status === 'ENTREGADO' ? 'default' : 'secondary'}>
                                            {shipment.status.replace('_', ' ')}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="py-4">
                                    <h2 className="text-lg font-semibold mb-6">Historial de eventos</h2>
                                    <Timeline events={shipment.events} currentStatus={shipment.status} />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="space-y-6">
                            <ShipmentDetails shipment={shipment} />

                            {/* Support Card */}
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                <h3 className="font-semibold text-blue-900 mb-2">¿Necesitas ayuda?</h3>
                                <p className="text-sm text-blue-700 mb-4">
                                    Si tienes dudas sobre tu envío, contáctanos indicando tu número de seguimiento.
                                </p>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none">
                                    Contactar Soporte
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
