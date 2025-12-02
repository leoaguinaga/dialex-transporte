import { Truck, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-bold text-xl text-primary">
                            <Truck className="h-6 w-6" />
                            <span>Dialex Transport</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Soluciones logísticas integrales para empresas modernas. Rastreo en tiempo real y gestión eficiente de flotas.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Servicios</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Transporte de carga</li>
                            <li>Logística última milla</li>
                            <li>Almacenamiento</li>
                            <li>Distribución nacional</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Términos y condiciones</li>
                            <li>Política de privacidad</li>
                            <li>Libro de reclamaciones</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Av. Industrial 123, Lima</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+51 1 234 5678</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>contacto@dialex.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Dialex Transport. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
