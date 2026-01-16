# CONTRIBUTING

Perche esiste
- Spiega come contribuire senza violare regole di sicurezza e di architettura.

Quando si usa
- Quando si aggiungono agenti, tool, workflow o si modifica il backend API.

Cosa succede se lo togli o lo fai male
- Il repo rischia inconsistenza e regressioni di sicurezza o osservabilita.

Linee guida
- Ogni file di codice deve includere commenti: scopo del file, funzioni principali, dove inserire logica [ ].
- Ogni file di documentazione deve spiegare: perche esiste, quando si usa, cosa succede se lo togli.
- Usare Zod per validare input/output dove rilevante.
- Non aggiungere UI/UX o logica turismo in questa fase.

Processo
- Aggiungi test minimi per nuovi moduli.
- Aggiorna documentazione correlata.
