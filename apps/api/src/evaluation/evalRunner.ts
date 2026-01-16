// Questo file esegue le valutazioni offline dei workflow.
// Funzioni principali: runEval; integrare in CI e dataset reali [ ].

import fs from "fs";
import path from "path";
import { computeScore } from "./metrics";

interface DemoCase {
  id: string;
  input: Record<string, unknown>;
  expected: Record<string, unknown>;
}

interface DemoRubric {
  threshold: number;
}

// runEval carica dataset e rubriche e stampa un report JSON [ ].
export function runEval(): void {
  const datasetPath = path.resolve(__dirname, "datasets/demoCases.json");
  const rubricPath = path.resolve(__dirname, "rubrics/demoRubric.json");

  const cases: DemoCase[] = JSON.parse(fs.readFileSync(datasetPath, "utf-8"));
  const rubric: DemoRubric = JSON.parse(fs.readFileSync(rubricPath, "utf-8"));

  const results = cases.map((c) => {
    const metric = computeScore(c.expected, c.input, rubric.threshold);
    return { id: c.id, ...metric };
  });

  const passed = results.every((r) => r.passed);
  const report = { passed, results };

  // Output JSON per CI.
  console.log(JSON.stringify(report, null, 2));
}

if (require.main === module) {
  runEval();
}
