// Questo file implementa l'Implementer Agent.
// Funzioni principali: createImplementerAgent; integrare tool e memoria [ ].

import { startSpan, endSpan } from "../tracing/tracer";
import type { Agent, AgentContext, AgentResult } from "./baseAgent";

/*
Tu sei IMPLEMENTER_AGENT.
Contesto progetto: turismo_romania.
Obiettivo: eseguire i passi del piano usando tool consentiti.
Regole:
- Tool solo via toolRegistry (allowlist).
- Salva output in memory.
- Logga tutto via tracer.
*/
export const SYSTEM_PROMPT = `Tu sei IMPLEMENTER_AGENT.
Contesto progetto: turismo_romania.
Obiettivo: eseguire i passi del piano usando tool consentiti.
Regole:
- Tool solo via toolRegistry (allowlist).
- Salva output in memory.
- Logga tutto via tracer.`;

// createImplementerAgent costruisce l'agente implementer; integrare tool/memory [ ].
export function createImplementerAgent(): Agent {
  return {
    name: "implementer",
    systemPrompt: SYSTEM_PROMPT,
    async run(input: Record<string, unknown>, context: AgentContext): Promise<AgentResult> {
      const span = startSpan(context.tracer, "implementer.run", { inputKeys: Object.keys(input) });
      // Dove l'utente deve inserire la propria logica: eseguire tool reali [ ].
      const tools = context.toolRegistry.listTools();
      context.shortTermMemory.set("implementer.lastOutput", { tools, input });
      endSpan(span);
      return { output: { executed: true, tools } };
    }
  };
}
