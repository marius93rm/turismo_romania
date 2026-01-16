// Questo file definisce l'interfaccia base per gli agenti.
// Funzioni principali: Agent interface; estendere con metodi specifici [ ].

import type { ToolRegistry } from "../tools/toolRegistry";
import type { MemoryStore } from "../memory/memoryContracts";
import type { TraceSession } from "../tracing/traceModels";

export interface AgentContext {
  toolRegistry: ToolRegistry;
  shortTermMemory: MemoryStore;
  longTermMemory: MemoryStore;
  tracer: TraceSession;
}

export interface AgentResult {
  output: Record<string, unknown>;
}

export interface Agent {
  name: string;
  systemPrompt: string;
  run: (input: Record<string, unknown>, context: AgentContext) => Promise<AgentResult>;
}
