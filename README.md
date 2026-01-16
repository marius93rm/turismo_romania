# turismo_romania

Perche esiste questo repo (fase attuale)
- Questo repository contiene solo l'infrastruttura IA per workflow agentic a supporto di un futuro sito turismo.
- Non include UI/UX, pagine, componenti, routing o contenuti di dominio; quelli arriveranno in fasi successive.

Quando si usa
- Quando serve eseguire, tracciare ed evaluare workflow IA su richieste demo o future integrazioni.

Cosa succede se lo togli o lo fai male
- Senza questa base non c'e orchestrazione affidabile, tracing, memoria, policy di sicurezza o valutazione automatica.
- Un'implementazione errata causa risultati non riproducibili, debug difficile e rischio di violazioni di policy.

Struttura ad alto livello (solo IA)
- `apps/api`: backend Express + workflow demo + tracing.
- `shared`: tipi e utility condivise.
- `scripts`: comandi di supporto per dev/demo/test/eval.
- `logs`: output dei tracer in formato jsonl.
- `data`: esempi di input/output demo.

Mappa di tutto quello che sta succedendo (overview)
- Avvio: `apps/api/src/main.ts` -> `apps/api/src/app.ts` (Express + middleware).
- Rotte: `apps/api/src/routes/health.ts` (healthcheck) e `apps/api/src/routes/workflow.ts` (trigger workflow).
- Orchestrazione: `apps/api/src/workflows/orchestrator.ts` gestisce stati, retry e checkpoint.
- Workflow demo: `apps/api/src/workflows/demoWorkflow.ts` orchestra la sequenza di agenti.
- Agenti: `apps/api/src/agents/*Agent.ts` (planner, implementer, reviewer, evaluator, security).
- Tooling: `apps/api/src/tools/toolRegistry.ts` + `apps/api/src/tools/*Tools.ts` (allowlist tool).
- Memoria: `apps/api/src/memory/*Store.ts` (short/long term + checkpoint).
- Tracing: `apps/api/src/tracing/tracer.ts` -> exporter jsonl/console.
- Evaluation: `apps/api/src/evaluation/*` con dataset/rubriche demo.
- Contratti condivisi: `shared/types/*` e `apps/api/src/*Contracts.ts`.

Flusso runtime (happy path)
- Request API -> validazione -> workflow demo.
- Planner -> Implementer -> Reviewer -> Evaluator -> Security.
- Checkpoint persistito -> tracer scrive `logs/*.jsonl` -> response.

Diagramma ASCII (happy path)
```
API request
    |
    v
validate input
    |
    v
demo workflow
    |
    v
Planner -> Implementer -> Reviewer -> Evaluator -> Security
    |
    v
checkpoint + tracer (jsonl)
    |
    v
API response
```

Diagramma ASCII (dettagliato)
```
API request
    |
    v
apps/api/src/routes/workflow.ts
    |
    v
validate input (zod)
    |
    v
apps/api/src/workflows/orchestrator.ts
    |
    v
apps/api/src/workflows/demoWorkflow.ts
    |
    v
apps/api/src/agents/plannerAgent.ts
  -> apps/api/src/agents/implementerAgent.ts
  -> apps/api/src/agents/reviewerAgent.ts
  -> apps/api/src/agents/evaluatorAgent.ts
  -> apps/api/src/agents/securityAgent.ts
    |
    v
apps/api/src/tools/toolRegistry.ts
  -> apps/api/src/tools/filesystemTools.ts
  -> apps/api/src/tools/gitTools.ts
  -> apps/api/src/tools/webTools.ts
    |
    v
apps/api/src/memory/checkpointStore.ts
    |
    v
apps/api/src/tracing/tracer.ts
  -> apps/api/src/tracing/exporters/jsonlExporter.ts
  -> logs/*.jsonl
    |
    v
API response
```

Artefatti e dati
- `logs/*.jsonl`: eventi con `correlationId`, `traceId` e spans.
- `data/samples/*`: input/output di esempio per demo.

Comandi
- Installazione (scegli uno):
  - `npm install`
  - `pnpm install`
- Dev server API:
  - `npm run dev`
  - `pnpm run dev`
- Demo workflow:
  - `npm run demo`
  - `pnpm run demo`
- Test:
  - `npm test`
  - `pnpm test`
- Eval:
  - `npm run eval`
  - `pnpm run eval`

Trace e dove finiscono
- Il tracer scrive file `logs/*.jsonl` con `correlationId`, `traceId` e spans.
- Ogni riga e un evento JSON (jsonl), utile per debug e metriche offline.

Note
- Provider LLM previsto: OpenAI (Codex con ChatGPT). In questa fase non ci sono chiavi reali o chiamate live.
- Dati sensibili: NO (per ora) [ ].
