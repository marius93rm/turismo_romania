// Questo file definisce i contratti per gli store di memoria.
// Funzioni/classi principali: interfacce per store; estendere campi se necessario [ ].

export interface MemoryRecord {
  key: string;
  value: unknown;
  updatedAt: number;
}

export interface MemoryStore {
  get: (key: string) => MemoryRecord | undefined;
  set: (key: string, value: unknown) => MemoryRecord;
}
