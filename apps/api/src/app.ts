// Questo file configura l'app Express e registra le routes.
// Funzioni principali: createApp; aggiungere middleware qui [ ].

import express from "express";
import { registerHealthRoutes } from "./routes/health";
import { registerWorkflowRoutes } from "./routes/workflow";

// createApp costruisce l'app Express e registra middleware/route [ ].
export function createApp(): express.Express {
  const app = express();
  app.use(express.json());

  registerHealthRoutes(app);
  registerWorkflowRoutes(app);

  return app;
}
