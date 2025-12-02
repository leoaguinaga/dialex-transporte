import { Sidebar } from '@/components/admin/Sidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />
            <div className="pl-64">
                <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-40">
                    <h2 className="font-semibold text-slate-700">Panel de Administración</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">
                                AD
                            </div>
                            <div className="text-sm">
                                <p className="font-medium text-slate-900">Admin User</p>
                                <p className="text-xs text-muted-foreground">Administrador</p>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
