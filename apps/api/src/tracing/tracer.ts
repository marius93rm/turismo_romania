// Questo file implementa un tracer minimale con exporter configurabile.
// Funzioni principali: createTraceSession, startSpan, endSpan; estendere per contesti nested [ ].

import { createId } from "../../../shared/utils/id";
import { nowMs } from "../../../shared/utils/time";
import type { TraceEvent, TraceSpan } from "../../../shared/types/tracing";
import type { TraceSession } from "./traceModels";
import { exportEvent as consoleExporter } from "./exporters/consoleExporter";
import { exportEvent as jsonlExporter } from "./exporters/jsonlExporter";

export type TraceExporter = "console" | "jsonl";

// createTraceSession inizializza una sessione di trace; estendere con contesto [ ].
export function createTraceSession(correlationId: string, exporter: TraceExporter): TraceSession {
  const traceId = createId("trace");
  const spans: TraceSpan[] = [];

  function toEvent(): TraceEvent {
    return {
      traceId,
      correlationId,
      timestamp: nowMs(),
      spans
    };
  }

  return { traceId, correlationId, spans, toEvent };
}

// startSpan crea e registra uno span nella sessione [ ].
export function startSpan(session: TraceSession, name: string, attributes?: Record<string, unknown>): TraceSpan {
  // Crea uno span e lo inserisce nella sessione.
  const span: TraceSpan = {
    spanId: createId("span"),
    name,
    startTime: nowMs(),
    attributes
  };
  session.spans.push(span);
  return span;
}

// endSpan chiude lo span con timestamp finale [ ].
export function endSpan(span: TraceSpan): void {
  // Finalizza lo span.
  span.endTime = nowMs();
}

// flushTrace esporta la sessione verso l'exporter configurato [ ].
export function flushTrace(session: TraceSession, exporter: TraceExporter): void {
  // Invia l'evento al exporter configurato.
  const event = session.toEvent();
  if (exporter === "console") {
    consoleExporter(event);
    return;
  }
  jsonlExporter(event);
}
