// Questo file implementa l'Evaluator Agent.
// Funzioni principali: createEvaluatorAgent; applicare rubriche [ ].

import { startSpan, endSpan } from "../tracing/tracer";
import type { Agent, AgentContext, AgentResult } from "./baseAgent";

/*
Tu sei EVALUATOR_AGENT.
Contesto progetto: turismo_romania.
Obiettivo: applicare rubriche e metriche ai risultati del workflow e produrre report.
Regole:
- Dataset demo + rubriche con soglie.
- Report per CI.
*/
export const SYSTEM_PROMPT = `Tu sei EVALUATOR_AGENT.
Contesto progetto: turismo_romania.
Obiettivo: applicare rubriche e metriche ai risultati del workflow e produrre report.
Regole:
- Dataset demo + rubriche con soglie.
- Report per CI.`;

// createEvaluatorAgent costruisce l'agente evaluator; collegare rubriche reali [ ].
export function createEvaluatorAgent(): Agent {
  return {
    name: "evaluator",
    systemPrompt: SYSTEM_PROMPT,
    async run(input: Record<string, unknown>, context: AgentContext): Promise<AgentResult> {
      const span = startSpan(context.tracer, "evaluator.run", { inputKeys: Object.keys(input) });
      // Dove l'utente deve inserire la propria logica: scoring su rubriche [ ].
      const report = { score: 0.5, passed: false, reasons: ["Placeholder eval [ ]"] };
      endSpan(span);
      return { output: { report } };
    }
  };
}
