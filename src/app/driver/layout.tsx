import { Truck, Map, List, LogOut } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DriverLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-100 pb-20">
            {/* Mobile Header */}
            <header className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold">
                        <Truck className="h-5 w-5 text-blue-500" />
                        <span>Dialex Driver</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">
                            CM
                        </div>
                    </div>
                </div>
            </header>

            <main className="p-4">
                {children}
            </main>

            {/* Mobile Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2 z-50 pb-safe">
                <Link href="/driver" className="flex flex-col items-center p-2 text-blue-600">
                    <List className="h-6 w-6" />
                    <span className="text-xs font-medium mt-1">Envíos</span>
                </Link>
                <Link href="/driver/map" className="flex flex-col items-center p-2 text-slate-400 hover:text-blue-600">
                    <Map className="h-6 w-6" />
                    <span className="text-xs font-medium mt-1">Mapa</span>
                </Link>
                <Link href="/" className="flex flex-col items-center p-2 text-slate-400 hover:text-red-600">
                    <LogOut className="h-6 w-6" />
                    <span className="text-xs font-medium mt-1">Salir</span>
                </Link>
            </nav>
        </div>
    );
}
