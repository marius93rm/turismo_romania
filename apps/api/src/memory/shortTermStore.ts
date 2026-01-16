// Questo file implementa uno store di memoria short-term in memoria.
// Funzioni principali: createShortTermStore; sostituire con cache reale [ ].

import { nowMs } from "../../../shared/utils/time";
import type { MemoryRecord, MemoryStore } from "./memoryContracts";

// createShortTermStore costruisce uno store in-memory; sostituire con cache [ ].
export function createShortTermStore(): MemoryStore {
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
