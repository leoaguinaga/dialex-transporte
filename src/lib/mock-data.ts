import { Shipment, Driver, Vehicle } from './types';

export const MOCK_DRIVERS: Driver[] = [
    {
        id: 'd1',
        name: 'Carlos Mendoza',
        license: 'A-12345678',
        phone: '+51 987 654 321',
        avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    },
    {
        id: 'd2',
        name: 'Jorge Luis Ramirez',
        license: 'A-87654321',
        phone: '+51 912 345 678',
        avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jorge',
    },
];

export const MOCK_VEHICLES: Vehicle[] = [
    {
        id: 'v1',
        plate: 'ABC-123',
        brand: 'Toyota',
        model: 'Hilux',
        type: 'Camioneta',
    },
    {
        id: 'v2',
        plate: 'XYZ-987',
        brand: 'Hino',
        model: '300 Series',
        type: 'Camión 5T',
    },
];

export const MOCK_SHIPMENTS: Shipment[] = [
    {
        id: 's1',
        trackingNumber: 'F001-00012345',
        referenceInvoice: 'F001-00012345',
        sender: {
            name: 'Dialex Central',
            address: 'Av. Industrial 123, Lima',
        },
        recipient: {
            name: 'Tech Solutions SAC',
            ruc: '20123456789',
            address: 'Av. Javier Prado Este 456, San Isidro, Lima',
            phone: '01 222 3333',
            coordinates: [-12.09056, -77.02894],
        },
        dates: {
            created: '2025-11-28T08:00:00Z',
            scheduled: '2025-11-30T10:00:00Z',
            estimatedDelivery: '2025-11-30T14:00:00Z',
        },
        status: 'EN_CAMINO',
        driverId: 'd1',
        vehicleId: 'v1',
        events: [
            {
                id: 'e1',
                status: 'ENVIADO',
                timestamp: '2025-11-28T08:30:00Z',
                description: 'Pedido registrado en sistema',
                imageUrl: 'https://placehold.co/600x400/png?text=Guia+Remision',
            },
            {
                id: 'e2',
                status: 'PROGRAMADO',
                timestamp: '2025-11-29T09:00:00Z',
                description: 'Ruta asignada a conductor Carlos Mendoza',
            },
            {
                id: 'e3',
                status: 'EN_CAMINO',
                timestamp: '2025-11-30T08:15:00Z',
                description: 'Unidad salió del centro de distribución',
            },
        ],
    },
    {
        id: 's2',
        trackingNumber: 'F001-00012346',
        referenceInvoice: 'F001-00012346',
        sender: {
            name: 'Dialex Central',
            address: 'Av. Industrial 123, Lima',
        },
        recipient: {
            name: 'Bodega El Vecino',
            ruc: '10987654321',
            address: 'Jr. De la Unión 555, Lima',
            phone: '999 888 777',
            coordinates: [-12.04637, -77.03060],
        },
        dates: {
            created: '2025-11-25T10:00:00Z',
            scheduled: '2025-11-26T11:00:00Z',
            estimatedDelivery: '2025-11-26T15:00:00Z',
            actualDelivery: '2025-11-26T14:30:00Z',
        },
        status: 'ENTREGADO',
        driverId: 'd2',
        vehicleId: 'v2',
        events: [
            {
                id: 'e1',
                status: 'ENVIADO',
                timestamp: '2025-11-25T10:00:00Z',
                description: 'Pedido registrado',
            },
            {
                id: 'e2',
                status: 'PROGRAMADO',
                timestamp: '2025-11-25T14:00:00Z',
                description: 'Programado para entrega',
            },
            {
                id: 'e3',
                status: 'EN_CAMINO',
                timestamp: '2025-11-26T09:00:00Z',
                description: 'En ruta de entrega',
            },
            {
                id: 'e4',
                status: 'ENTREGADO',
                timestamp: '2025-11-26T14:30:00Z',
                description: 'Entregado a Juan Pérez',
                imageUrl: 'https://placehold.co/600x400/png?text=Prueba+Entrega',
            },
        ],
        deliveryImageUrl: 'https://placehold.co/600x400/png?text=Prueba+Entrega',
    },
    {
        id: 's3',
        trackingNumber: 'F001-00012347',
        referenceInvoice: 'F001-00012347',
        sender: {
            name: 'Dialex Central',
            address: 'Av. Industrial 123, Lima',
        },
        recipient: {
            name: 'Supermercados Metro',
            ruc: '20100000001',
            address: 'Av. Alf Ugarte 123, Lima',
            phone: '01 555 1234',
        },
        dates: {
            created: '2025-11-30T09:00:00Z',
            scheduled: '2025-12-01T10:00:00Z',
            estimatedDelivery: '2025-12-01T18:00:00Z',
        },
        status: 'REPROGRAMADO',
        driverId: 'd1',
        vehicleId: 'v1',
        events: [
            {
                id: 'e1',
                status: 'ENVIADO',
                timestamp: '2025-11-30T09:00:00Z',
                description: 'Pedido registrado',
            },
            {
                id: 'e2',
                status: 'PROGRAMADO',
                timestamp: '2025-11-30T15:00:00Z',
                description: 'Programado para mañana',
            },
            {
                id: 'e3',
                status: 'EN_CAMINO',
                timestamp: '2025-12-01T08:00:00Z',
                description: 'En ruta',
            },
            {
                id: 'e4',
                status: 'REPROGRAMADO',
                timestamp: '2025-12-01T11:00:00Z',
                description: 'Cliente no se encontraba. Reprogramado para mañana.',
            },
        ],
    },
];
