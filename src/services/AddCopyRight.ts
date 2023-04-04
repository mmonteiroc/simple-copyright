import {
  Logger,
  copyRightExists,
  getFileContent,
  writeFileContent,
} from "../helpers";

export function addCopyRight(copyrightNotice: string, filePath: string) {
  const fileContent = getFileContent(filePath);
  const copyRightNoticeExists = copyRightExists(fileContent, copyrightNotice);

  if (copyRightNoticeExists) {
    Logger.logInfo("Copy right already exists in file");
    return;
  }

  Logger.logInfo("Copy right does not exist in file");
  Logger.logInfo("Adding copy right to file");
  Logger.logDebug(`File path: ${filePath}`);

  // Add copy right notice to file at the top
  const newFileContent = copyrightNotice + "\n" + fileContent;
  writeFileContent(filePath, newFileContent);

  Logger.logInfo("Copy right added to file!");
}
