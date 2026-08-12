import { useState } from 'react';
import { projectionData } from '../../../shared/lib/data';

// Valores predefinidos de circularidad para los botones
const TARGETS = [6.9, 10, 17, 25];

export const ProjectionImpact = () => {
  const [selectedTarget, setSelectedTarget] = useState(6.9);
  const impactDays = projectionData.impact[selectedTarget as unknown as keyof typeof projectionData.impact] || 0;

  // Calcular el retraso en días a partir del impacto
  const delayDays = impactDays;

  return (
    <section className="py-16 bg-brand-ivory">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-4">
          ¿Qué pasaría si mejoramos la circularidad?
        </h2>
        <p className="text-center text-brand-steel mb-8 max-w-2xl mx-auto">
          Aumentar la circularidad global no solo reduce residuos, también retrasa el Earth Overshoot Day. 
          Selecciona un objetivo y mira el impacto.
        </p>

        {/* Botones de selección de objetivo */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {TARGETS.map((target) => (
            <button
              key={target}
              onClick={() => setSelectedTarget(target)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTarget === target
                  ? 'bg-brand-navy text-brand-ivory'
                  : 'bg-brand-pearl text-brand-navy hover:bg-brand-smoke'
              }`}
            >
              {target}%
            </button>
          ))}
        </div>

        {/* Visualización del impacto */}
        <div className="max-w-3xl mx-auto bg-brand-pearl p-6 rounded-lg shadow-sm text-center">
          <p className="text-lg font-medium text-brand-navy">
            Si alcanzamos una circularidad del <span className="font-bold text-accent-sun">{selectedTarget}%</span>
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-5xl font-bold text-accent-rust">{delayDays}</span>
            <span className="text-xl font-medium text-brand-navy">días</span>
          </div>
          <p className="text-sm text-brand-steel mt-2">
            se retrasaría el Earth Overshoot Day
          </p>
          <div className="mt-4 p-3 bg-brand-ivory rounded border border-brand-pearl">
            <p className="text-sm font-medium text-brand-navy">
              {delayDays > 0 ? (
                <>🌍 Esto significa que el Overshoot Day se movería del 30 de julio al <span className="font-bold">{new Date(2026, 6, 30 + delayDays).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}</span></>
              ) : (
                <>🌍 Este es el punto de partida actual (6.9% de circularidad).</>
              )}
            </p>
          </div>
          <p className="text-xs text-brand-smoke mt-4 italic">
            Basado en el Circularity Gap Report 2026 y estimaciones de Global Footprint Network.
          </p>
        </div>
      </div>
    </section>
  );
};