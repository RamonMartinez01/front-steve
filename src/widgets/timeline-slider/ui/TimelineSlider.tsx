import { useState } from 'react';
import { overshootDates } from '../../../shared/lib/data';

export const TimelineSlider = () => {
    const years = Object.keys(overshootDates).map(Number).sort((a, b) => a - b);
    const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);

    const currentDate = overshootDates[selectedYear];
    const earliestDate = overshootDates[years[0]];
    const latestDate = overshootDates[years[years.length - 1]];

    // Calcular "meses adelantados" (simplificado: comparar mes del overshoot vs mes de enero)
    // Obtener el mes (1-12) de la fecha del Overshoot Day
    const month = new Date(currentDate).getMonth() + 1;
    // Calcular los meses de adelanto respecto a diciembre (mes 12)
    const monthsAhead = 12 - month; // 0 para diciembre, 5 para julio, 11 para enero
    // Asegurar que no sea negativo (caso improbable, pero por seguridad)
    const monthsAheadDisplay = Math.max(0, monthsAhead);

    return (
        <section className="py-16 bg-brand-ivory">
            <div className="container-narrow">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-8">
                    El Overshoot Day se ha adelantado
                </h2>
                <div className="max-w-3xl mx-auto bg-brand-pearl p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between text-sm text-brand-steel mb-2">
                        <span>{years[0]}</span>
                        <span>{years[years.length - 1]}</span>
                    </div>
                    <input
                        type="range"
                        min={years[0]}
                        max={years[years.length - 1]}
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                        className="w-full h-2 bg-brand-smoke rounded-lg appearance-none cursor-pointer accent-brand-navy"
                        step="1"
                    />
                    <div className="mt-4 text-center">
                        <p className="text-lg font-medium text-brand-navy">
                            {currentDate}
                        </p>
                        <p className="text-sm text-brand-steel mt-1">
                            {monthsAheadDisplay > 0 ? (
                                <> El Overshoot Day se adelantó <span className="font-bold text-accent-rust">{monthsAheadDisplay} meses</span> respecto a diciembre</>
                            ) : (
                                <>📅 El Overshoot Day ocurre en diciembre (sin adelanto anual)</>
                            )}
                        </p>
                    </div>
                </div>
                <p className="text-center text-xs text-brand-smoke mt-4">
                    Arrastra el control para ver la evolución del Earth Overshoot Day
                </p>
            </div>
        </section>
    );
};