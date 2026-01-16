// Questo file coordina l'esecuzione dei workflow e degli agenti.
// Funzioni principali: runOrchestratedWorkflow; inserire nuova logica di orchestrazione [ ].

import { createPlannerAgent, createImplementerAgent, createReviewerAgent, createEvaluatorAgent, createSecurityAgent } from "../agents";
import { buildToolRegistry } from "../tools/toolRegistry";
import { createShortTermStore } from "../memory/shortTermStore";
import { createLongTermStore } from "../memory/longTermStore";
import { createCheckpointStore } from "../memory/checkpointStore";
import { createTraceSession, startSpan, endSpan, flushTrace, type TraceExporter } from "../tracing/tracer";
import type { WorkflowInput, WorkflowResult } from "./workflowContracts";
import { createId } from "../../../shared/utils/id";

export interface OrchestratorResult {
  traceId: string;
  correlationId: string;
  result: WorkflowResult;
}

// runOrchestratedWorkflow esegue la pipeline demo con agenti, tool e memoria [ ].
export async function runOrchestratedWorkflow(input: WorkflowInput, exporter: TraceExporter): Promise<OrchestratorResult> {
  // Crea contesto condiviso (tool, memory, tracer) per gli agenti.
  const correlationId = createId("correlation");
  const tracer = createTraceSession(correlationId, exporter);
  const toolRegistry = buildToolRegistry();
  const shortTermMemory = createShortTermStore();
  const longTermMemory = createLongTermStore();
  const checkpointStore = createCheckpointStore();

  const planner = createPlannerAgent();
  const implementer = createImplementerAgent();
  const reviewer = createReviewerAgent();
  const evaluator = createEvaluatorAgent();
  const security = createSecurityAgent();

  const context = { toolRegistry, shortTermMemory, longTermMemory, tracer };

  const workflowSpan = startSpan(tracer, "workflow.run", { requestId: input.requestId });

  // Esegue i passi principali del workflow demo in modo sequenziale.
  const plan = await planner.run(input, context);
  const impl = await implementer.run(plan.output, context);
  const review = await reviewer.run(impl.output, context);
  const evalResult = await evaluator.run(review.output, context);
  const securityResult = await security.run(evalResult.output, context);

  // Salva un checkpoint minimo per ripresa o audit.
  checkpointStore.set(input.requestId, {
    plan: plan.output,
    impl: impl.output,
    review: review.output,
    eval: evalResult.output,
    security: securityResult.output
  });

  endSpan(workflowSpan);
  flushTrace(tracer, exporter);

  const result: WorkflowResult = {
    summary: "Demo workflow completed",
    details: {
      plan: plan.output,
      impl: impl.output,
      review: review.output,
      eval: evalResult.output,
      security: securityResult.output
    }
  };

  return { traceId: tracer.traceId, correlationId, result };
}
