// Questo file avvia il server HTTP.
// Funzioni principali: main; inserire bootstrap avanzato qui [ ].

import { createApp } from "./app";
import { getConfig } from "./config/config";

// main avvia il server HTTP; aggiungere shutdown hooks qui [ ].
function main(): void {
  const app = createApp();
  const { port } = getConfig();

  app.listen(port, () => {
    console.log(`API running on port ${port}`);
  });
}

main();
