// Questo file implementa la route di health check.
// Funzioni principali: registerHealthRoutes; aggiungere check avanzati [ ].

import type { Express, Request, Response } from "express";

// registerHealthRoutes registra l'endpoint di health check; estendere con check reali [ ].
export function registerHealthRoutes(app: Express): void {
  app.get("/health", (_req: Request, res: Response) => {
    res.json({ status: "ok" });
  });
}
