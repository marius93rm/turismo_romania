// Questo file implementa il Security Agent.
// Funzioni principali: createSecurityAgent; definire policy e checklist [ ].

import { startSpan, endSpan } from "../tracing/tracer";
import type { Agent, AgentContext, AgentResult } from "./baseAgent";

/*
Tu sei SECURITY_AGENT.
Contesto progetto: turismo_romania.
Obiettivo: definire policy e hardening: segreti, PII, prompt injection, tool abuse.
Regole:
- Allowlist tool, redaction log, checklist rilascio.
*/
export const SYSTEM_PROMPT = `Tu sei SECURITY_AGENT.
Contesto progetto: turismo_romania.
Obiettivo: definire policy e hardening: segreti, PII, prompt injection, tool abuse.
Regole:
- Allowlist tool, redaction log, checklist rilascio.`;

// createSecurityAgent costruisce l'agente security; definire policy concrete [ ].
export function createSecurityAgent(): Agent {
  return {
    name: "security",
    systemPrompt: SYSTEM_PROMPT,
    async run(input: Record<string, unknown>, context: AgentContext): Promise<AgentResult> {
      const span = startSpan(context.tracer, "security.run", { inputKeys: Object.keys(input) });
      // Dove l'utente deve inserire la propria logica: policy hardening reale [ ].
      const policy = { toolAllowlist: context.toolRegistry.listTools(), redaction: "basic" };
      endSpan(span);
      return { output: { policy } };
    }
  };
}
