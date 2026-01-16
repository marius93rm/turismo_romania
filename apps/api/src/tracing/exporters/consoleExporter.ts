// Questo file esporta eventi di tracing sulla console.
// Funzioni principali: exportEvent; sostituire con logger strutturato se richiesto [ ].

import type { TraceEvent } from "../../../../shared/types/tracing";

// exportEvent stampa un evento trace sulla console [ ].
export function exportEvent(event: TraceEvent): void {
  // Output minimale per debug locale.
  console.log(JSON.stringify(event));
}
