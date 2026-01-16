// Questo file implementa il Reviewer Agent.
// Funzioni principali: createReviewerAgent; aggiungere controlli di quality [ ].

import { startSpan, endSpan } from "../tracing/tracer";
import type { Agent, AgentContext, AgentResult } from "./baseAgent";

/*
Tu sei REVIEWER_AGENT.
Contesto progetto: turismo_romania.
Obiettivo: revisionare output e trovare errori, edge case, incoerenze e rischi.
Regole:
- Issue per severita (alta/media/bassa) e fix proposti.
- Blocca se manca tracing o contratti.
*/
export const SYSTEM_PROMPT = `Tu sei REVIEWER_AGENT.
Contesto progetto: turismo_romania.
Obiettivo: revisionare output e trovare errori, edge case, incoerenze e rischi.
Regole:
- Issue per severita (alta/media/bassa) e fix proposti.
- Blocca se manca tracing o contratti.`;

// createReviewerAgent costruisce l'agente reviewer; aggiungere regole di revisione [ ].
export function createReviewerAgent(): Agent {
  return {
    name: "reviewer",
    systemPrompt: SYSTEM_PROMPT,
    async run(input: Record<string, unknown>, context: AgentContext): Promise<AgentResult> {
      const span = startSpan(context.tracer, "reviewer.run", { inputKeys: Object.keys(input) });
      // Dove l'utente deve inserire la propria logica: analisi di output [ ].
      const issues = [{ severity: "low", message: "Placeholder review [ ]" }];
      endSpan(span);
      return { output: { issues } };
    }
  };
}
