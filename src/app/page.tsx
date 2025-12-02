import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Search, Map, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                Nuevo sistema de rastreo 2.0
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                Logística inteligente para <br />
                <span className="text-primary">tu negocio en movimiento</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Gestiona envíos, optimiza rutas y mantén a tus clientes informados en tiempo real con la plataforma más avanzada del mercado.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/tracking">
                  <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
                    <Search className="mr-2 h-5 w-5" />
                    Rastrear un envío
                  </Button>
                </Link>
                <Link href="/admin">
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                    Acceso Corporativo
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
        </section>

        {/* How it works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Rastreo simple y transparente</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nuestro sistema te permite conocer el estado exacto de tu carga en todo momento, desde la recolección hasta la entrega final.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Ingresa tu código</h3>
                <p className="text-muted-foreground">
                  Usa el número de factura o guía de remisión proporcionado al momento de la compra.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <Map className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Visualiza el estado</h3>
                <p className="text-muted-foreground">
                  Ve el progreso en tiempo real, incluyendo fotos de la guía y ubicación del transporte.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Confirma la entrega</h3>
                <p className="text-muted-foreground">
                  Recibe una notificación cuando el pedido sea entregado con prueba fotográfica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Potencia tu logística con tecnología de punta</h2>
                <p className="text-lg text-muted-foreground">
                  Dialex Transport no es solo una empresa de transporte, es tu socio estratégico para optimizar la cadena de suministro.
                </p>

                <ul className="space-y-4">
                  {[
                    'Rastreo satelital en tiempo real',
                    'Optimización de rutas con IA',
                    'Gestión de flotas y conductores',
                    'Reportes y analítica avanzada'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button variant="link" className="px-0 text-primary font-semibold">
                    Conoce más sobre nuestros servicios <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative h-[400px] bg-white rounded-2xl shadow-xl border overflow-hidden group">
                {/* Abstract UI Representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-6 border-b pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-slate-200 rounded w-1/3 animate-pulse" />
                    <div className="h-32 bg-blue-50 rounded-lg border border-blue-100 p-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="h-4 bg-blue-200 rounded w-24" />
                          <div className="h-3 bg-blue-100 rounded w-32" />
                        </div>
                        <div className="h-8 w-8 bg-blue-500 rounded-full opacity-20" />
                      </div>
                    </div>
                    <div className="h-32 bg-white rounded-lg border border-slate-200 p-4 shadow-sm translate-x-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="h-4 bg-slate-200 rounded w-24" />
                          <div className="h-3 bg-slate-100 rounded w-32" />
                        </div>
                        <div className="h-8 w-8 bg-slate-500 rounded-full opacity-20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
