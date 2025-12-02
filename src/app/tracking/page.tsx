"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, PackageSearch } from 'lucide-react';

export default function TrackingSearchPage() {
    const [trackingId, setTrackingId] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (trackingId.trim()) {
            router.push(`/tracking/${trackingId}`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />

            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-lg space-y-8">
                    <div className="text-center space-y-2">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border mb-4">
                            <PackageSearch className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Rastrea tu envío</h1>
                        <p className="text-muted-foreground">
                            Ingresa el número de factura o guía de remisión para ver el estado actual.
                        </p>
                    </div>

                    <Card className="border-slate-200 shadow-lg">
                        <CardContent className="pt-6">
                            <form onSubmit={handleSearch} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="tracking-id" className="text-sm font-medium text-slate-700">
                                        Número de seguimiento
                                    </label>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            id="tracking-id"
                                            placeholder="Ej. F001-00012345"
                                            className="pl-10 h-12 text-lg"
                                            value={trackingId}
                                            onChange={(e) => setTrackingId(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full h-12 text-base" size="lg">
                                    Rastrear ahora
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="text-center text-sm text-muted-foreground">
                        ¿Tienes problemas? <a href="#" className="text-primary hover:underline">Contacta a soporte</a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
