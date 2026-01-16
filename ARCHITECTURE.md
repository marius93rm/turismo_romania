# ARCHITECTURE

Perche esiste
- Descrive l'architettura dell'infrastruttura IA e le sue responsabilita, senza entrare nel dominio turismo.

Quando si usa
- Durante design review, onboarding, debug o estensione dei workflow agentic.

Cosa succede se lo togli o lo fai male
- Senza una descrizione chiara aumentano incoerenze, decisioni duplicate e regressioni di sicurezza.

Cartelle principali
- `agents/`: definisce i ruoli e i prompt degli agenti.
- `workflows/`: orchestrazione e contratti dei workflow.
- `tools/`: allowlist e contratti dei tool chiamabili.
- `memory/`: store per contesto short/long term e checkpoint.
- `tracing/`: tracciamento delle esecuzioni e output jsonl.
- `evaluation/`: dataset demo, rubriche e runner di valutazione.

Flusso dati
- Request -> orchestrator -> agents -> tools -> memory -> tracer -> response.

Decisioni e tradeoff
- Allowlist tool: riduce rischio di tool abuse e rende il comportamento prevedibile.
- Zod: validazione input/output per fermare errori precoci con messaggi espliciti.
- Checkpointing: consente retry e ripresa in caso di errore o timeout.
- Tracing jsonl: facilita osservabilita e analisi offline con strumenti semplici.

Placeholder
- [ ] Decisioni future su persistenza di long-term memory.
- [ ] Strategie di caching e rate limit.
