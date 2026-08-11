import { useEffect, useState } from 'react';
import { RESOURCE_DATA } from '../../../shared/lib/data';

export const HeroSection = () => {
    const [resourcesUsed, setResourcesUsed] = useState(0);
    const totalAnnualResources = RESOURCE_DATA.annualExtraction; // dato inventado, en /shared/lib/data

    useEffect(() => {
        // Simula el consumo en tiempo real (distribución uniforme durante el año)
        // Esto se sustituirá por la API de consumo en tiempo real de ...{alguien que la exponga públicamente}
        /**
      * Cálculo inicial: determina cuántos recursos se han consumido hasta ahora en el año.
      * 1. Obtiene el timestamp del 1 de enero de 2026 a las 00:00:00 UTC.
      * 2. Calcula la fracción del año transcurrida (elapsed) dividiendo el tiempo transcurrido
      *    entre los milisegundos de un año (365.25 días).
      * 3. Multiplica esa fracción por el total anual (annualExtraction) para obtener el consumo
      *    acumulado hasta el momento actual, y lo redondea con Math.floor.
      */
        const startTime = new Date(2026, 0, 1).getTime();
        const now = Date.now();
        const elapsed = (now - startTime) / (365.25 * 24 * 60 * 60 * 1000); // fracción del año
        const used = Math.floor(totalAnnualResources * Math.min(elapsed, 1));
        setResourcesUsed(used);

        /**
     * Intervalo de actualización: cada segundo, incrementa el contador en una cantidad
     * proporcional al consumo medio por segundo del año.
     * - Incremento = total anual / (segundos en un año)
     * - Se usa Math.min para no superar el total anual cuando el año esté completo.
     */
        const interval = setInterval(() => {
            setResourcesUsed(prev => {
                const increment = Math.floor(totalAnnualResources / (365.25 * 24 * 60 * 60));
                return Math.min(prev + increment, totalAnnualResources);
            });
        }, 1000);

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, [totalAnnualResources]);

    return (
        <section className="min-h-screen flex items-center justify-center bg-brand-navy text-brand-ivory px-3 xs:px-4 py-6 xs:py-8">
            <div className="max-w-5xl mx-auto text-center w-full min-w-0">
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 xs:mb-4">
                    Recursos consumidos en 2026
                </h1>
                <div className="metric-number text-4xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-accent-sun break-words px-1">
                    {resourcesUsed.toLocaleString()}
                </div>
                <p className="metric-label mt-1 text-brand-smoke">toneladas</p>
                <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-brand-ivory/80 max-w-2xl mx-auto px-2">
                    El <span className="font-bold text-accent-rust">30 de julio</span> ya gastamos el presupuesto anual del planeta.
                </p>
                <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-brand-smoke px-2">
                    <span>🌍 1.73 planetas necesarios</span>
                    <span className="hidden xs:inline">•</span>
                    <span>📅 Overshoot Day: 30 de julio</span>
                </div>
            </div>
        </section>
    );
}