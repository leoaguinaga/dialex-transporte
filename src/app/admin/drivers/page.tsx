import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MOCK_DRIVERS } from "@/lib/mock-data";
import { Users } from "lucide-react";
import { DriverDialog } from "@/components/admin/drivers/DriverDialog";

export default function DriversPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Choferes</h1>
                    <p className="text-muted-foreground">Gestión de conductores registrados.</p>
                </div>
                <DriverDialog />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Conductores Activos
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">Avatar</TableHead>
                                <TableHead>Nombre</TableHead>
                                <TableHead>Licencia</TableHead>
                                <TableHead>Teléfono</TableHead>
                                <TableHead>Estado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {MOCK_DRIVERS.map((driver) => (
                                <TableRow key={driver.id}>
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage src={driver.avatarUrl} alt={driver.name} />
                                            <AvatarFallback>{driver.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="font-medium">{driver.name}</TableCell>
                                    <TableCell>{driver.license}</TableCell>
                                    <TableCell>{driver.phone}</TableCell>
                                    <TableCell>
                                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            Disponible
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
