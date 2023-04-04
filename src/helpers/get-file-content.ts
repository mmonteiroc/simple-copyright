import fs from "fs";
import { withPerformance } from "./monitor/withPerformance";
import { Logger } from "./Logger";

export function getFileContent(filePath: string): string {
  Logger.logDebug("[Helper] Getting file content");
  Logger.logDebug(`[Helper] File path: ${filePath}`);

  const { result } = withPerformance(() => fs.readFileSync(filePath, "utf8"));

  return result;
}
