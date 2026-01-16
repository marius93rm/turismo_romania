// Questo file implementa la route per lanciare il demo workflow.
// Funzioni principali: registerWorkflowRoutes; aggiungere routing futuro [ ].

import type { Express, Request, Response } from "express";
import { runDemoWorkflow } from "../workflows/demoWorkflow";
import { getConfig } from "../config/config";

// registerWorkflowRoutes registra l'endpoint che lancia il demo workflow [ ].
export function registerWorkflowRoutes(app: Express): void {
  app.post("/workflow/run", async (req: Request, res: Response) => {
    try {
      const { traceExporter } = getConfig();
      const result = await runDemoWorkflow(req.body, traceExporter);
      res.json({ traceId: result.traceId, result: result.result });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });
}
