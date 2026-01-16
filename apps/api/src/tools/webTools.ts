// Questo file contiene tool web (placeholder con allowlist).
// Funzioni principali: webFetch; integrare fetch con policy di sicurezza [ ].

import type { ToolDefinition, ToolInput, ToolOutput } from "./toolContracts";

// webFetch simula un fetch HTTP; implementare allowlist domini [ ].
async function webFetch(input: ToolInput): Promise<ToolOutput> {
  // Dove l'utente deve inserire la propria logica: fetch con allowlist domini [ ].
  return { result: { message: "web_fetch not implemented", input } };
}

export const webFetchTool: ToolDefinition = {
  name: "web_fetch",
  description: "Web fetch with allowlist (placeholder).",
  run: webFetch
};
