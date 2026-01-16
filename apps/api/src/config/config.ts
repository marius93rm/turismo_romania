// Questo file centralizza la configurazione runtime dell'API.
// Funzioni principali: getConfig; aggiungere nuove variabili qui [ ].

export interface AppConfig {
  port: number;
  traceExporter: "console" | "jsonl";
}

// getConfig legge e normalizza la configurazione; aggiungere parsing robusto [ ].
export function getConfig(): AppConfig {
  // Dove l'utente deve inserire la propria logica: validazioni avanzate e parsing [ ].
  const port = Number(process.env.PORT || 3000);
  const traceExporter = (process.env.TRACE_EXPORTER || "jsonl") as AppConfig["traceExporter"];
  return { port, traceExporter };
}
