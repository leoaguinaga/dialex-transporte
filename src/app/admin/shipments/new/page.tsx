"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { MOCK_DRIVERS, MOCK_VEHICLES } from '@/lib/mock-data';
import { Upload, Save } from 'lucide-react';

export default function NewShipmentPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        alert('Envío registrado exitosamente (Mock)');
    };

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Registrar Nuevo Envío</h1>
                <p className="text-muted-foreground">Complete el formulario para crear una nueva orden de transporte.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid gap-8">
                    {/* General Info */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Información General</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="invoice">Número de Factura / Referencia</Label>
                                <Input id="invoice" placeholder="F001-00000000" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="date">Fecha de Traslado</Label>
                                <Input id="date" type="date" required />
                            </div>
                            <div className="col-span-2 space-y-2">
                                <Label>Guía de Remisión (Foto)</Label>
                                <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                                    <Upload className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                                    <p className="text-sm text-muted-foreground">Click para subir o arrastra el archivo aquí</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Route Info */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Ruta y Destinatario</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="origin">Dirección de Partida</Label>
                                <Input id="origin" defaultValue="Av. Industrial 123, Lima (Central)" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="destination">Dirección de Llegada</Label>
                                <Input id="destination" placeholder="Dirección exacta" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="recipient">Nombre del Destinatario</Label>
                                <Input id="recipient" placeholder="Empresa o Persona" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="ruc">RUC / DNI</Label>
                                <Input id="ruc" placeholder="Documento de identidad" required />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Transport Assignment */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Asignación de Transporte</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label>Conductor</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar conductor" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {MOCK_DRIVERS.map(driver => (
                                            <SelectItem key={driver.id} value={driver.id}>{driver.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Vehículo</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar vehículo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {MOCK_VEHICLES.map(vehicle => (
                                            <SelectItem key={vehicle.id} value={vehicle.id}>{vehicle.brand} {vehicle.model} - {vehicle.plate}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="col-span-2 space-y-2">
                                <Label htmlFor="notes">Observaciones</Label>
                                <Textarea id="notes" placeholder="Instrucciones especiales para el conductor..." />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end gap-4">
                        <Button variant="outline" type="button">Cancelar</Button>
                        <Button type="submit" disabled={isLoading} className="min-w-[150px]">
                            {isLoading ? 'Guardando...' : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    Crear Envío
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
