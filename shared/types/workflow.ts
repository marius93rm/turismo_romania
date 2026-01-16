// Questo file definisce i tipi base dei workflow per condivisione cross-package.
// Funzioni/classi principali: solo tipi; qui si estendono i contratti del workflow [ ].

export type WorkflowStatus = "pending" | "running" | "checkpointed" | "failed" | "completed";

export interface WorkflowInput {
  // Dove l'utente deve inserire la propria logica: estendere il payload demo con campi reali [ ].
  requestId: string;
  payload: Record<string, unknown>;
}

export interface WorkflowResult {
  // Dove l'utente deve inserire la propria logica: risultato finale del workflow [ ].
  summary: string;
  details: Record<string, unknown>;
}
