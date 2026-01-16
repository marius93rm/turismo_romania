// Questo file testa gli store di memoria.
// Funzioni principali: test get/set; integrare persistenza reale [ ].

import test from "node:test";
import assert from "node:assert/strict";
import { createShortTermStore } from "../src/memory/shortTermStore";

// Verifica set/get dello store short-term [ ].
test("short term store set/get", () => {
  const store = createShortTermStore();
  store.set("key", { value: 1 });
  const record = store.get("key");
  assert.equal(record?.key, "key");
});
