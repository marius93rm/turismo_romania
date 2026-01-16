// Questo file registra i tool consentiti e applica la allowlist.
// Funzioni principali: buildToolRegistry, runTool; aggiungere tool qui [ ].

import type { ToolDefinition, ToolInput, ToolOutput, ToolName } from "./toolContracts";
import { filesystemReadTool } from "./filesystemTools";
import { webFetchTool } from "./webTools";
import { gitStatusTool } from "./gitTools";

export interface ToolRegistry {
  runTool: (name: ToolName, input: ToolInput) => Promise<ToolOutput>;
  listTools: () => ToolName[];
}

// buildToolRegistry crea la registry con allowlist; aggiungere tool qui [ ].
export function buildToolRegistry(): ToolRegistry {
  const allowlist: Record<ToolName, ToolDefinition> = {
    filesystem_read: filesystemReadTool,
    web_fetch: webFetchTool,
    git_status: gitStatusTool
  };

  // runTool esegue un tool solo se presente in allowlist [ ].
  async function runTool(name: ToolName, input: ToolInput): Promise<ToolOutput> {
    const tool = allowlist[name];
    if (!tool) {
      throw new Error(`Tool not allowed: ${name}`);
    }
    return tool.run(input);
  }

  // listTools ritorna i nomi dei tool consentiti [ ].
  function listTools(): ToolName[] {
    return Object.keys(allowlist) as ToolName[];
  }

  return { runTool, listTools };
}
