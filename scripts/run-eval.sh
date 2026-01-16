#!/usr/bin/env bash
# Questo script esegue la valutazione offline.
# Funzioni principali: build + eval; aggiungere output report [ ].

set -euo pipefail

npm --prefix apps/api run build
npm --prefix apps/api run eval
