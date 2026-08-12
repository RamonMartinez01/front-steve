import { useState } from 'react';
import { circularityData } from '../../../shared/lib/data';

export const SectorBreakdown = () => {
    const sectors = circularityData.sectors;
    const [selectedSector, setSelectedSector] = useState(sectors[0]);

    return (
        <section className="py-16 bg-brand-ivory">
            <div className="container-narrow">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-8">
                    Circularidad por Sector
                </h2>
                <p className="text-center text-brand-steel mb-8 max-w-2xl mx-auto">
                    Cada industria tiene un impacto diferente. Selecciona un sector para ver su nivel de circularidad y su contribución al desperdicio global.
                </p>

                {/* Botones de selección de sector */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {sectors.map((sector) => (
                        <button
                            key={sector.name}
                            onClick={() => setSelectedSector(sector)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedSector.name === sector.name
                                    ? 'bg-brand-navy text-brand-ivory'
                                    : 'bg-brand-pearl text-brand-navy hover:bg-brand-smoke'
                                }`}
                        >
                            {sector.name}
                        </button>
                    ))}
                </div>

                {/* Detalles del sector seleccionado */}
                <div className="max-w-3xl mx-auto bg-brand-pearl p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold text-brand-navy text-center">
                        {selectedSector.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                        <div className="bg-brand-ivory p-4 rounded-lg">
                            <p className="text-sm text-brand-steel">Circularidad</p>
                            <p className="text-3xl font-bold text-accent-rust">
                                {selectedSector.circularity}%
                            </p>
                        </div>
                        <div className="bg-brand-ivory p-4 rounded-lg">
                            <p className="text-sm text-brand-steel">Residuos globales</p>
                            <p className="text-3xl font-bold text-brand-navy">
                                {selectedSector.wastePercentage}%
                            </p>
                        </div>
                    </div>
                    <p className="text-xs text-brand-smoke text-center mt-4 italic">
                        Datos basados en el Circularity Gap Report 2026
                    </p>

                    {/* Barra de progreso comparativa */}
                    <div className="mt-4">
                        <div className="flex justify-between text-xs text-brand-steel mb-1">
                            <span>Circularidad</span>
                            <span>Promedio global: 6.9%</span>
                        </div>
                        <div className="w-full bg-brand-ivory rounded-full h-3 overflow-hidden">
                            <div
                                className={`h-3 rounded-full ${selectedSector.circularity >= 6.9 ? 'bg-accent-sun' : 'bg-accent-rust'
                                    }`}
                                style={{ width: `${Math.min(selectedSector.circularity / 10 * 100, 100)}%` }}
                            ></div>
                        </div>
                        <p className="text-xs text-brand-smoke text-center mt-1">
                            {selectedSector.circularity >= 6.9
                                ? `✅ Por encima del promedio global (${selectedSector.circularity}%)`
                                : `⚠️ Por debajo del promedio global (${selectedSector.circularity}%)`}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};