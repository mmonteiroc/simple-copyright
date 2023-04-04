import fs from "fs";
import { Logger } from "./Logger";
import { withPerformance } from "./monitor/withPerformance";

export function writeFileContent(filePath: string, content: string): void {
  Logger.logInfo("[Helper] Writing file content");
  Logger.logDebug(`[Helper] File path: ${filePath}`);
  Logger.logDebug(`[Helper] File content: ${content}`);

  withPerformance(() => fs.writeFileSync(filePath, content, "utf8"));
}
