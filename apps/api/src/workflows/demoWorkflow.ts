// Questo file definisce il workflow demo e la sua validazione.
// Funzioni principali: runDemoWorkflow; aggiungere workflow reali qui [ ].

import { workflowInputSchema, workflowResultSchema, type WorkflowInput, type WorkflowResult } from "./workflowContracts";
import { runOrchestratedWorkflow } from "./orchestrator";
import type { TraceExporter } from "../tracing/tracer";

// runDemoWorkflow valida input e delega all'orchestrator; estendere con workflow reali [ ].
export async function runDemoWorkflow(input: unknown, exporter: TraceExporter): Promise<{ traceId: string; result: WorkflowResult }> {
  // Valida input con zod e lancia l'orchestrator.
  const parsed = workflowInputSchema.parse(input);
  const output = await runOrchestratedWorkflow(parsed, exporter);
  workflowResultSchema.parse(output.result);
  return { traceId: output.traceId, result: output.result };
}
