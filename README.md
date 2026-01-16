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
