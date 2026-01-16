// Questo file genera ID semplici senza dipendenze esterne.
// Funzioni principali: createId; sostituire con UUID se richiesto [ ].

// createId genera un ID pseudo-unico; sostituire con UUID se richiesto [ ].
export function createId(prefix: string): string {
  // Genera un ID pseudo-unique con timestamp + random.
  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
}
