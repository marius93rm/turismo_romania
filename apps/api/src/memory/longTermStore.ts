// Questo file implementa uno store di memoria long-term (placeholder).
// Funzioni principali: createLongTermStore; sostituire con DB/Vector DB [ ].

import { nowMs } from "../../../shared/utils/time";
import type { MemoryRecord, MemoryStore } from "./memoryContracts";

// createLongTermStore costruisce uno store long-term; sostituire con DB [ ].
export function createLongTermStore(): MemoryStore {
  const store = new Map<string, MemoryRecord>();

  // get legge un record dalla memoria [ ].
  function get(key: string): MemoryRecord | undefined {
    return store.get(key);
  }

  // set salva un record in memoria [ ].
  function set(key: string, value: unknown): MemoryRecord {
    const record: MemoryRecord = { key, value, updatedAt: nowMs() };
    store.set(key, record);
    return record;
  }

  return { get, set };
}
