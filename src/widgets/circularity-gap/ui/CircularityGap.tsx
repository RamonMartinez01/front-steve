import { VictoryPie, VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';
import { circularityData, extractionData } from '../../../shared/lib/data';

export const CircularityGap = () => {
    const donutData = [
        { x: 'Reciclado', y: circularityData.global.recycled },
        { x: 'Virgen', y: circularityData.global.virgin },
    ];

    const barData = [
        { periodo: '1950-1970', extraccion: extractionData.generaciones.periodo1.total },
        { periodo: '2017-2021', extraccion: extractionData.generaciones.periodo2.total },
    ];

    return (
        <section className="py-16 bg-brand-ivory">
            <div className="container-narrow">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mb-8">
                    La Brecha de Circularidad
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Dona de circularidad global */}
                    <div className="bg-brand-pearl p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-accent-rust text-center mb-2">
                            Circularidad Global 2026
                        </h3>
                        <div className="relative z-10" style={{ minHeight: '300px' }}>
                            <VictoryPie
                                data={donutData}
                                innerRadius={80}
                                colorScale={['#b91c1c', '#1e293b']}
                                labelPlacement="vertical"
                                labels={({ datum }) => `${datum.y}%`}
                                style={{
                                    labels: {
                                        fontSize: 14,
                                        fill: '#0a1929',
                                        fontWeight: 'bold',
                                        padding: 10,
                                    },
                                    data: { stroke: '#e2e8f0', strokeWidth: 2 },
                                }}
                            />
                        </div>

                        {/* Copy contextual con position relativa y z-index */}
                        <div className="mt-4 text-center bg-brand-ivory p-3 rounded border border-brand-pearl relative z-20">
                            <p className="text-sm font-medium text-brand-navy">
                                <span className="text-accent-rust font-bold">6.9%</span> de los materiales que usamos vuelven a la economía.
                            </p>
                            <p className="text-xs text-brand-steel mt-1">
                                El <span className="font-bold">93.1%</span> restante se extrae, usa y desecha para siempre.
                            </p>
                            <p className="text-xs text-brand-navy mt-2 italic">
                                “Si no lo reciclamos, lo estamos robando a las próximas generaciones.”
                            </p>
                        </div>
                    </div>

                    {/* Barras de extracción comparativa */}
                    <div className="bg-brand-pearl p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-brand-navy text-center mb-2">
                            Extracción: 3 generaciones vs 5 años
                        </h3>
                        <div className="relative z-10" style={{ minHeight: '250px' }}>
                            <VictoryChart domainPadding={{ x: 20 }}>
                                <VictoryAxis tickValues={barData.map(d => d.periodo)} />
                                <VictoryAxis dependentAxis />
                                <VictoryBar
                                    data={barData}
                                    x="periodo"
                                    y="extraccion"
                                    style={{
                                        data: {
                                            fill: ({ datum }) =>
                                                datum.periodo === '2017-2021' ? '#b91c1c' : '#0a1929'
                                        }
                                    }}
                                    labels={({ datum }) => `${datum.extraccion} M t`}
                                    labelComponent={<VictoryTooltip style={{ fontSize: 12 }} />}
                                />
                            </VictoryChart>
                        </div>
                        {/* Copy contextual */}
                        <div className="mt-4 text-center bg-brand-ivory p-3 rounded border border-brand-pearl">
                            <p className="text-sm font-medium text-brand-navy">
                                En <span className="font-bold text-accent-rust">5 años</span> (2017-2021) extrajimos
                                <span className="font-bold text-accent-rust"> 3 veces más </span>
                                recursos que en <span className="font-bold">3 generaciones</span> (1950-1970).
                            </p>
                            <p className="text-xs text-brand-steel mt-1">
                                La humanidad está consumiendo a un ritmo <span className="font-bold">insostenible</span>.
                            </p>
                            <p className="text-xs text-brand-smoke mt-2 italic">
                                “Necesitaríamos 1.7 planetas para mantener este ritmo de extracción.”
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm text-brand-smoke mt-4">
                    Datos basados en el Circularity Gap Report 2026
                </p>
            </div>
        </section>
    );
};