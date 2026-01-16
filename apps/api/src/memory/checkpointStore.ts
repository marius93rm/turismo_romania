// Questo file gestisce checkpoint di workflow per ripresa e retry.
// Funzioni principali: createCheckpointStore; collegare persistenza reale [ ].

import { nowMs } from "../../../shared/utils/time";
import type { MemoryRecord, MemoryStore } from "./memoryContracts";

// createCheckpointStore costruisce uno store per checkpoint; sostituire con persistenza [ ].
export function createCheckpointStore(): MemoryStore {
  const store = new Map<string, MemoryRecord>();

  // get legge un checkpoint [ ].
  function get(key: string): MemoryRecord | undefined {
    return store.get(key);
  }

  // set salva un checkpoint [ ].
  function set(key: string, value: unknown): MemoryRecord {
    const record: MemoryRecord = { key, value, updatedAt: nowMs() };
    store.set(key, record);
    return record;
  }

  return { get, set };
}
