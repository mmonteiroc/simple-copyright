import { LogLevel, Logger, copyRightExists, withPerformance } from "./helpers";
import {
  addCopyRight,
  getAllFiles,
  getCopyrightNoticeSample,
} from "./services";

export function entryPoint(
  samplePath: string,
  rootPath: string,
  debug: boolean
): void {
  Logger.setLogLevel(debug ? LogLevel.debug : LogLevel.info);

  Logger.logInfo("Starting");
  Logger.logDebug(`Sample path: ${samplePath}`);
  Logger.logDebug(`Root path: ${rootPath}`);

  const { result: allFiles, time } = withPerformance(() =>
    getAllFiles({ includeFrom: rootPath })
  );

  Logger.logInfo(`Found ${allFiles.length} files`);
  Logger.logInfo(allFiles);

  const copyRightNotice = getCopyrightNoticeSample(samplePath);

  allFiles.forEach((file) => {
    Logger.logInfo("#######################");
    Logger.logInfo(file);
    addCopyRight(copyRightNotice, file);
    Logger.logInfo();
  });

  Logger.logInfo("Done");
}
