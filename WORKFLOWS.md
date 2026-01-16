# WORKFLOWS

Perche esiste
- Documenta cosa e un workflow agentic e i suoi stati.

Quando si usa
- Per comprendere la pipeline di orchestrazione o introdurre nuovi workflow.

Cosa succede se lo togli o lo fai male
- Si perde la definizione dei passaggi e non si capisce come vengono gestiti retry e checkpoint.

Definizione di workflow
- Un workflow e una sequenza controllata di passi che coordina agenti, tool e memoria.
- Stati: `pending`, `running`, `checkpointed`, `failed`, `completed`.

Demo workflow (diagramma testuale)
- start
  -> validate input
  -> planner agent
  -> implementer agent
  -> reviewer agent
  -> evaluator agent
  -> security agent
  -> persist checkpoint
  -> finish

Retry ed error handling
- Se un passo fallisce, l'orchestrator registra un evento di errore e può riprendere da checkpoint.
- I retry sono limitati e configurabili [ ].

Checkpointing
- Salva lo stato minimo necessario per riprendere un workflow.
- Se rimosso o mal implementato, si perdono progressi e non si possono ripetere i passi in modo idempotente.
