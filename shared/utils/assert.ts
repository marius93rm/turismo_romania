// Questo file fornisce un assert minimale per validare condizioni runtime.
// Funzioni principali: assert; sostituire con una libreria se necessario [ ].

// assert lancia un errore se la condizione non e vera; integrare con logger [ ].
export function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
