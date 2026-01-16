// Questo file testa gli agenti base e i loro output minimi.
// Funzioni principali: test degli agenti; aggiungere casi reali [ ].

import test from "node:test";
import assert from "node:assert/strict";
import { createPlannerAgent } from "../src/agents/plannerAgent";
import { buildToolRegistry } from "../src/tools/toolRegistry";
import { createShortTermStore } from "../src/memory/shortTermStore";
import { createLongTermStore } from "../src/memory/longTermStore";
import { createTraceSession } from "../src/tracing/tracer";

// Verifica che il planner ritorni un output minimo valido [ ].
test("planner agent returns a plan", async () => {
  const agent = createPlannerAgent();
  const context = {
    toolRegistry: buildToolRegistry(),
    shortTermMemory: createShortTermStore(),
    longTermMemory: createLongTermStore(),
    tracer: createTraceSession("test", "console")
  };
  const result = await agent.run({ requestId: "demo" }, context);
  assert.ok(result.output);
});
