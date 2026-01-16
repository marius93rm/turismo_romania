// Questo file definisce i modelli interni di tracing.
// Funzioni/classi principali: TraceSession; estendere attributi o metadata [ ].

import type { TraceEvent, TraceSpan } from "../../../shared/types/tracing";

export interface TraceSession {
  traceId: string;
  correlationId: string;
  spans: TraceSpan[];
  toEvent: () => TraceEvent;
}
