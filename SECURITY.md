# SECURITY

Perche esiste
- Definisce policy minime per segreti, prompt injection e controllo tool.

Quando si usa
- Prima di un rilascio, durante audit o quando si aggiungono tool/agent.

Cosa succede se lo togli o lo fai male
- Aumenta il rischio di leakage, prompt injection e abuso dei tool.

Segreti
- I segreti vivono in `.env` e non devono mai finire nel repo.
- Usare `.env.example` come template senza valori reali.

Prompt injection
- Valida input, limita tool, logga tutte le azioni.
- Non fidarsi mai del contenuto utente senza sanitizzazione [ ].

Tool allowlist e redaction log
- Solo tool registrati in `toolRegistry` sono eseguibili.
- Log redatti devono rimuovere dati sensibili [ ].

Checklist pre-release
- [ ] Verifica assenza di segreti nel repo.
- [ ] Tracing attivo e completo (traceId + correlationId).
- [ ] Policy di tool allowlist aggiornata.
- [ ] Dataset eval aggiornato.
