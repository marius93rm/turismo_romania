// Questo file definisce metriche di valutazione per i workflow.
// Funzioni principali: computeScore; estendere con metriche reali [ ].

export interface MetricResult {
  score: number;
  passed: boolean;
  notes: string[];
}

// computeScore calcola uno score basico; sostituire con metrica reale [ ].
export function computeScore(expected: unknown, actual: unknown, threshold: number): MetricResult {
  // Dove l'utente deve inserire la propria logica: confronto reale expected vs actual [ ].
  const score = typeof expected !== "undefined" && typeof actual !== "undefined" ? 1 : 0;
  const passed = score >= threshold;
  return { score, passed, notes: ["Placeholder metric [ ]"] };
}
