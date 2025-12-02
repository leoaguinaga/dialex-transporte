import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <Truck className="h-6 w-6" />
                    <span>Dialex Transport</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                        Servicios
                    </Link>
                    <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                        Cómo funciona
                    </Link>
                    <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                        Empresas
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/tracking">
                        <Button>Rastrear Envío</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
