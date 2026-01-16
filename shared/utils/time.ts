// Questo file centralizza funzioni di tempo.
// Funzioni principali: nowMs; estendere per timezone/clock mocking [ ].

// nowMs ritorna timestamp in millisecondi; sostituire con clock mockabile [ ].
export function nowMs(): number {
  return Date.now();
}
