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

export default function MapComponent() {
    const center: [number, number] = [-12.046374, -77.042793]; // Lima Center

    // Filter active shipments with coordinates
    const markers = MOCK_SHIPMENTS
        .filter(s => s.driverId === 'd1' && s.recipient.coordinates)
        .map(s => ({
            id: s.id,
            position: s.recipient.coordinates as [number, number],
            title: s.recipient.name,
            address: s.recipient.address
        }));

    return (
        <MapContainer
            center={center}
            zoom={12}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker) => (
                <Marker key={marker.id} position={marker.position} icon={icon}>
                    <Popup>
                        <div className="p-2">
                            <h3 className="font-bold text-sm">{marker.title}</h3>
                            <p className="text-xs text-slate-600">{marker.address}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
