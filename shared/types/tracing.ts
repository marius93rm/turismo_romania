// Questo file definisce i modelli di tracing condivisi.
// Funzioni/classi principali: solo tipi; estendere schema degli span se necessario [ ].

export interface TraceSpan {
  spanId: string;
  name: string;
  startTime: number;
  endTime?: number;
  attributes?: Record<string, unknown>;
}

export interface TraceEvent {
  traceId: string;
  correlationId: string;
  timestamp: number;
  spans: TraceSpan[];
}
