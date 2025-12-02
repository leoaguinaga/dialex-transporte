"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Configuración</h1>
                <p className="text-muted-foreground">Administra las preferencias de la plataforma.</p>
            </div>

            <Tabs defaultValue="general" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
                    <TabsTrigger value="security">Seguridad</TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                    <Card>
                        <CardHeader>
                            <CardTitle>Información de la Empresa</CardTitle>
                            <CardDescription>
                                Actualiza los detalles de tu organización.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="company-name">Nombre de la Empresa</Label>
                                <Input id="company-name" defaultValue="Dialex Transport" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email de Contacto</Label>
                                <Input id="email" defaultValue="contacto@dialex.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Dirección Principal</Label>
                                <Input id="address" defaultValue="Av. Industrial 123, Lima" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Guardar Cambios</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Preferencias de Notificaciones</CardTitle>
                            <CardDescription>
                                Elige cómo y cuándo quieres ser notificado.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="email-notifs" className="flex flex-col space-y-1">
                                    <span>Notificaciones por Email</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        Recibe resúmenes diarios y alertas importantes.
                                    </span>
                                </Label>
                                <Switch id="email-notifs" defaultChecked />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="sms-notifs" className="flex flex-col space-y-1">
                                    <span>Alertas SMS</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        Para eventos críticos de envíos.
                                    </span>
                                </Label>
                                <Switch id="sms-notifs" />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between space-x-2">
                                <Label htmlFor="push-notifs" className="flex flex-col space-y-1">
                                    <span>Notificaciones Push</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        Alertas en tiempo real en el navegador.
                                    </span>
                                </Label>
                                <Switch id="push-notifs" defaultChecked />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Guardar Preferencias</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="security">
                    <Card>
                        <CardHeader>
                            <CardTitle>Seguridad de la Cuenta</CardTitle>
                            <CardDescription>
                                Gestiona tu contraseña y sesiones.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="current-password">Contraseña Actual</Label>
                                <Input id="current-password" type="password" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="new-password">Nueva Contraseña</Label>
                                <Input id="new-password" type="password" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                                <Input id="confirm-password" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Actualizar Contraseña</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
