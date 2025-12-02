export type ShipmentStatus =
    | 'ENVIADO'
    | 'PROGRAMADO'
    | 'EN_CAMINO'
    | 'REPROGRAMADO'
    | 'ENTREGADO'
    | 'CANCELADO';

export interface TrackingEvent {
    id: string;
    status: ShipmentStatus;
    timestamp: string;
    description: string;
    location?: string;
    imageUrl?: string; // For proof of delivery or initial guide
}

export interface Driver {
    id: string;
    name: string;
    license: string;
    phone: string;
    avatarUrl?: string;
}

export interface Vehicle {
    id: string;
    plate: string;
    model: string;
    brand: string;
    type: string;
}

export interface Shipment {
    id: string;
    trackingNumber: string; // Invoice number
    referenceInvoice: string;
    sender: {
        name: string;
        address: string;
    };
    recipient: {
        name: string;
        ruc: string;
        address: string;
        phone: string;
        coordinates?: [number, number]; // Lat, Lng
    };
    dates: {
        created: string;
        scheduled: string;
        estimatedDelivery: string;
        actualDelivery?: string;
    };
    status: ShipmentStatus;
    driverId?: string;
    vehicleId?: string;
    events: TrackingEvent[];
    guideImageUrl?: string;
    deliveryImageUrl?: string;
}

export interface KPIStats {
    total: number;
    sent: number;
    scheduled: number;
    inTransit: number;
    rescheduled: number;
    delivered: number;
}
