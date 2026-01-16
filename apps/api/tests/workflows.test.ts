// Questo file testa il demo workflow end-to-end.
// Funzioni principali: test demo workflow; espandere con casi reali [ ].

import test from "node:test";
import assert from "node:assert/strict";
import { runDemoWorkflow } from "../src/workflows/demoWorkflow";

// Verifica che il demo workflow generi traceId e summary attesa [ ].
test("demo workflow returns traceId and result", async () => {
  const input = { requestId: "demo_1", payload: { demo: true } };
  const result = await runDemoWorkflow(input, "console");
  assert.ok(result.traceId);
  assert.equal(result.result.summary, "Demo workflow completed");
});
