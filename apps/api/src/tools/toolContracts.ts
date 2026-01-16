// Questo file definisce i contratti dei tool e la allowlist.
// Funzioni/classi principali: ToolDefinition; estendere con nuovi tool [ ].

export type ToolName = "filesystem_read" | "web_fetch" | "git_status";

export interface ToolInput {
  // Dove l'utente deve inserire la propria logica: schema input tool [ ].
  payload: Record<string, unknown>;
}

export interface ToolOutput {
  // Dove l'utente deve inserire la propria logica: schema output tool [ ].
  result: Record<string, unknown>;
}

export interface ToolDefinition {
  name: ToolName;
  description: string;
  run: (input: ToolInput) => Promise<ToolOutput>;
}
