// src/shared/lib/data.ts

// 1. Datos del Earth Overshoot Day (año -> fecha)
export const overshootDates: Record<number, string> = {
  1970: '1970-12-23',
  1980: '1980-11-01',
  1990: '1990-10-11',
  2000: '2000-09-23',
  2010: '2010-08-21',
  2017: '2017-08-02',
  2018: '2018-08-01',
  2019: '2019-07-29',
  2020: '2020-08-22',
  2021: '2021-07-29',
  2022: '2022-07-28',
  2023: '2023-08-02',
  2024: '2024-08-01',
  2025: '2025-07-29',
  2026: '2026-07-30', // Dato oficial de 2026
};

// 2. Datos de extracción de recursos (millones de toneladas)
export const extractionData = {
  // "En 5 años (2017-2021) extrajimos lo que 3 generaciones (1950-1970)"
  generaciones: {
    periodo1: { label: '1950-1970 (3 generaciones)', total: 500 }, // valor inventado
    periodo2: { label: '2017-2021 (5 años)', total: 1500 }, // valor inventado
  },
  // Serie anual para gráfico de barras (opcional)
  anual: [
    { year: 1950, value: 80 },
    { year: 1960, value: 120 },
    { year: 1970, value: 180 },
    { year: 2017, value: 450 },
    { year: 2018, value: 480 },
    { year: 2019, value: 520 },
    { year: 2020, value: 490 },
    { year: 2021, value: 550 },
  ],
};

// 3. Datos de circularidad (Circularity Gap Report)
export const circularityData = {
  global: {
    recycled: 6.9,   // 6.9% reciclado
    virgin: 93.1,    // 93.1% extracción virgen
  },
  // Desglose por sectores (para el Acto 4)
  sectors: [
    { name: 'Alimentos', circularity: 5.2, wastePercentage: 30 },
    { name: 'Construcción', circularity: 8.1, wastePercentage: 25 },
    { name: 'Electrónica', circularity: 3.5, wastePercentage: 15 },
    { name: 'Textil', circularity: 2.8, wastePercentage: 10 },
    { name: 'Transporte', circularity: 7.0, wastePercentage: 20 },
  ],
};

// 4. Proyección para el Acto 5 (impacto de mejorar circularidad)
export const projectionData = {
  currentCircularity: 6.9,
  targetCircularity: 17,
  // Días que se retrasaría el Overshoot Day si aumentamos la circularidad
  impact: {
    '6.9': 0,    // línea base
    '10': 15,
    '17': 45,
    '25': 80,
  },
};