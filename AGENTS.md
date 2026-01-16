# AGENTS

Perche esiste
- Definisce ruoli, responsabilita e contratti degli agenti usati nei workflow.

Quando si usa
- Quando si aggiungono agenti, si aggiorna un prompt o si verificano output incoerenti.

Cosa succede se lo togli o lo fai male
- Aumentano conflitti di responsabilita, prompt ambigui e risultati non riproducibili.

Tabella agenti

| Agente | Responsabilita | Input | Output |
| --- | --- | --- | --- |
| Planner | Genera un piano a step con dipendenze e rischi | Richiesta utente | Piano JSON | 
| Implementer | Esegue i passi del piano con tool allowlist | Piano JSON | Risultati esecuzione | 
| Reviewer | Trova errori e rischi | Output implementer | Lista issue + fix | 
| Evaluator | Applica rubriche e metriche | Output workflow + dataset | Report eval | 
| Security | Definisce policy e hardening | Config di sistema | Policy e checklist | 

Contratti e regole
- Input/output validati con zod nei punti rilevanti.
- Output deve includere `traceId` e `correlationId`.
- Gli agenti non chiamano tool direttamente: passano dal `toolRegistry`.

Escalation a human-in-the-loop
- [ ] Casi in cui richiedere approvazione umana prima di eseguire un tool.
- [ ] Policy di blocco quando mancano tracing o contratti.
