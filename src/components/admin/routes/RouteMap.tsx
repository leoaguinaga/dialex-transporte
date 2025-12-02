"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MOCK_SHIPMENTS } from '@/lib/mock-data';

// Fix Leaflet default icon issue
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function RouteMap() {
    const center: [number, number] = [-12.046374, -77.042793]; // Lima Center

    // Filter active shipments with coordinates (EN_CAMINO or PROGRAMADO)
    const activeShipments = MOCK_SHIPMENTS.filter(
        s => (s.status === 'EN_CAMINO' || s.status === 'PROGRAMADO') && s.recipient.coordinates
    );

    return (
        <MapContainer
            center={center}
            zoom={11}
            style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {activeShipments.map((shipment) => (
                <Marker
                    key={shipment.id}
                    position={shipment.recipient.coordinates as [number, number]}
                    icon={icon}
                >
                    <Popup>
                        <div className="p-2 min-w-[200px]">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                                    {shipment.trackingNumber}
                                </span>
                                <span className="text-[10px] text-slate-500">
                                    {shipment.status.replace('_', ' ')}
                                </span>
                            </div>
                            <h3 className="font-bold text-sm mb-1">{shipment.recipient.name}</h3>
                            <p className="text-xs text-slate-600 mb-2">{shipment.recipient.address}</p>
                            <div className="text-xs border-t pt-2 mt-2">
                                <p><strong>Conductor:</strong> {shipment.driverId || 'Sin asignar'}</p>
                                <p><strong>Vehículo:</strong> {shipment.vehicleId || 'Sin asignar'}</p>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
