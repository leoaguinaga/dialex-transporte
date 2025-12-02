"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    PackagePlus,
    Truck,
    Users,
    Map,
    CalendarClock,
    Settings,
    LogOut
} from 'lucide-react';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
    { icon: PackagePlus, label: 'Registrar Envío', href: '/admin/shipments/new' },
    { icon: CalendarClock, label: 'Reprogramaciones', href: '/admin/rescheduling' },
    { icon: Truck, label: 'Transportes', href: '/admin/vehicles' },
    { icon: Users, label: 'Choferes', href: '/admin/drivers' },
    { icon: Map, label: 'Rutas', href: '/admin/routes' },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col fixed left-0 top-0 bottom-0 z-50">
            <div className="p-6 border-b border-slate-800">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <Truck className="h-6 w-6 text-blue-500" />
                    <span>Dialex Admin</span>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                                isActive
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800 space-y-2">
                <Link
                    href="/admin/settings"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium"
                >
                    <Settings className="h-5 w-5" />
                    Configuración
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/30 transition-colors text-sm font-medium"
                >
                    <LogOut className="h-5 w-5" />
                    Cerrar Sesión
                </Link>
            </div>
        </aside>
    );
}
