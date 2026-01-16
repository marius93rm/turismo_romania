// Questo file definisce i contratti dei workflow e la validazione input/output.
// Funzioni principali: workflowInputSchema; estendere con campi reali [ ].

import { z } from "zod";

export const workflowInputSchema = z.object({
  requestId: z.string().min(1),
  payload: z.record(z.unknown())
});

export type WorkflowInput = z.infer<typeof workflowInputSchema>;

export const workflowResultSchema = z.object({
  summary: z.string(),
  details: z.record(z.unknown())
});

export type WorkflowResult = z.infer<typeof workflowResultSchema>;
