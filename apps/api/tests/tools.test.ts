// Questo file testa il tool registry e la allowlist.
// Funzioni principali: test allowlist; aggiungere tool reali [ ].

import test from "node:test";
import assert from "node:assert/strict";
import { buildToolRegistry } from "../src/tools/toolRegistry";

// Verifica che la allowlist non sia vuota [ ].
test("tool registry lists allowed tools", () => {
  const registry = buildToolRegistry();
  const tools = registry.listTools();
  assert.ok(tools.length > 0);
});
