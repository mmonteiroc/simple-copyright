import { Logger, getFileContent, withPerformance } from "../helpers";

export function getCopyrightNoticeSample(filePath: string): string {
  const { result: fileContent, time } = withPerformance(() =>
    getFileContent(filePath)
  );

  Logger.logInfo("Sample notice:", fileContent);
  return fileContent;
}
