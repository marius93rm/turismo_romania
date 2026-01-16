#!/usr/bin/env bash
# Questo script lancia il demo workflow via API.
# Funzioni principali: curl su /workflow/run; aggiornare host/port se necessario [ ].

set -euo pipefail

API_URL="http://localhost:${PORT:-3000}/workflow/run"

curl -sS -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{"requestId":"demo_cli","payload":{"demo":true}}'

echo ""
