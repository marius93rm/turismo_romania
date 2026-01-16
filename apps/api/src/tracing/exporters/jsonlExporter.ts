// Questo file esporta eventi di tracing in formato jsonl su disco.
// Funzioni principali: exportEvent; configurare il path dei log qui [ ].

import fs from "fs";
import path from "path";
import type { TraceEvent } from "../../../../shared/types/tracing";

const LOG_DIR = path.resolve(process.cwd(), "../../logs");

// exportEvent appende un evento JSONL su file [ ].
export function exportEvent(event: TraceEvent): void {
  // Assicura che la directory esista e appende una linea JSON.
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
  const filePath = path.join(LOG_DIR, `trace_${event.traceId}.jsonl`);
  fs.appendFileSync(filePath, `${JSON.stringify(event)}\n`, "utf-8");
}
