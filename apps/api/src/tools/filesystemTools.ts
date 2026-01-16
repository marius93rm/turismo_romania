// Questo file contiene tool filesystem (placeholder con allowlist).
// Funzioni principali: filesystemRead; aggiungere read-only reale [ ].

import type { ToolDefinition, ToolInput, ToolOutput } from "./toolContracts";

// filesystemRead simula un read-only; integrare controlli path e sandbox [ ].
async function filesystemRead(input: ToolInput): Promise<ToolOutput> {
  // Dove l'utente deve inserire la propria logica: leggere file in modo sicuro [ ].
  return { result: { message: "filesystem_read not implemented", input } };
}

export const filesystemReadTool: ToolDefinition = {
  name: "filesystem_read",
  description: "Read-only filesystem access (placeholder).",
  run: filesystemRead
};
