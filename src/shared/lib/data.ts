// src/shared/lib/data.ts
export const RESOURCE_DATA = {
  annualExtraction: 100_000_000_000, // 100 mil millones de toneladas (dato inventado)
  overshootDate: '2026-07-30',
};

// 1. Datos del Earth Overshoot Day (año -> fecha)
export const overshootDates: Record<number, string> = {
  1970: '1970-12-30',
  1971: '1971-12-25',
  1972: '1972-12-31',
  1973: '1973-12-16',
  1974: '1974-12-12',
  1975: '1975-12-12',
  1976: '1976-12-02',
  1977: '1977-11-27',
  1978: '1975-11-18',
  1979: '1975-11-07',
  1980: '1980-11-01',
  1981: '1981-12-01',
  1982: '1982-12-08',
  1983: '1983-12-15',
  1984: '1984-11-27',
  1985: '1985-11-17',
  1986: '1986-11-13',
  1987: '1987-11-05',
  1988: '1988-10-24',
  1989: '1989-10-22',
  1990: '1990-10-23',
  1991: '1991-10-27',
  1992: '1992-11-07',
  1993: '1993-11-03',
  1994: '1994-10-26',
  1995: '1995-10-17',
  1996: '1996-10-11',
  1997: '1997-10-12',
  1998: '1998-10-13',
  1999: '1999-10-02',
  2000: '2000-09-23',
  2001: '2001-09-18',
  2002: '2002-09-26',
  2003: '2003-09-18',
  2004: '2004-09-07',
  2005: '2005-09-01',
  2006: '2006-08-28',
  2007: '2007-08-20',
  2008: '2008-08-21',
  2009: '2009-08-28',
  2010: '2010-08-15',
  2011: '2011-08-10',
  2012: '2012-08-07',
  2013: '2013-08-07',
  2014: '2014-08-09',
  2015: '2015-08-12',
  2016: '2016-08-14',
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