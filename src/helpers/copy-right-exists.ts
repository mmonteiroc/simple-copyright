import { Logger } from "./Logger";
import { withPerformance } from "./monitor/withPerformance";

export function copyRightExists(fileContent: string, copyRightNotice: string) {
  Logger.logInfo("[Helper] Checking if copy right exists in file");
  Logger.logDebug(`[Helper] File content: ${fileContent}`);
  Logger.logDebug(`[Helper] Copy right notice: ${copyRightNotice}`);

  const check = withPerformance(() => fileContent.includes(copyRightNotice));
  Logger.logDebug(`Performance: ${check.time}ms`);

  return check.result;
}
