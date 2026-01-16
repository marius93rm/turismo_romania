// Questo file implementa il Planner Agent.
// Funzioni principali: createPlannerAgent; inserire logica di pianificazione [ ].

import { startSpan, endSpan } from "../tracing/tracer";
import type { Agent, AgentContext, AgentResult } from "./baseAgent";

// Prompt richiesto (commento iniziale + export stringa).
/*
Tu sei PLANNER_AGENT.
Contesto progetto: turismo_romania (Travel). Questa fase crea solo infrastruttura IA.
Obiettivo: trasformare una richiesta in un piano a step con dipendenze, rischi e criteri di done.
Regole:
- Output: goal, assumptions, steps, risks, doneCriteria.
- Non scrivere codice. Non chiamare tool.
- Se manca info critica, usa placeholder [ ].
Formato: JSON.
*/
export const SYSTEM_PROMPT = `Tu sei PLANNER_AGENT.
Contesto progetto: turismo_romania (Travel). Questa fase crea solo infrastruttura IA.
Obiettivo: trasformare una richiesta in un piano a step con dipendenze, rischi e criteri di done.
Regole:
- Output: goal, assumptions, steps, risks, doneCriteria.
- Non scrivere codice. Non chiamare tool.
- Se manca info critica, usa placeholder [ ].
Formato: JSON.`;

// createPlannerAgent costruisce l'agente planner; inserire logica di pianificazione [ ].
export function createPlannerAgent(): Agent {
  return {
    name: "planner",
    systemPrompt: SYSTEM_PROMPT,
    async run(input: Record<string, unknown>, context: AgentContext): Promise<AgentResult> {
      const span = startSpan(context.tracer, "planner.run", { inputKeys: Object.keys(input) });
      // Dove l'utente deve inserire la propria logica: generare un piano reale [ ].
      const output = {
        goal: "Create AI workflow infrastructure",
        assumptions: ["Input demo", "No UI"],
        steps: ["Validate input", "Run demo workflow"],
        risks: ["Missing requirements [ ]"],
        doneCriteria: ["TraceId generated", "Result returned"]
      };
      endSpan(span);
      return { output };
    }
  };
}
