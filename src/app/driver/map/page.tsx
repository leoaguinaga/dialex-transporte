"use client";

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function DriverMapPage() {
    const Map = useMemo(() => dynamic(
        () => import('@/components/driver/MapComponent'),
        {
            loading: () => <div className="h-full w-full bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">Cargando mapa...</div>,
            ssr: false
        }
    ), []);

    return (
        <div className="h-[calc(100vh-8rem)] rounded-xl overflow-hidden border shadow-inner">
            <Map />
        </div>
    );
}
