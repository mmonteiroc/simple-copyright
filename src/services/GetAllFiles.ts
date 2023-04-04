import fs, { readdirSync } from "fs";
import path from "path";

export function getAllFiles(options: {
  patternToExclude?: string;
  includeFrom?: string;
}): string[] {
  const { patternToExclude, includeFrom = "./" } = options;

  const files: string[] = [];

  const dirents = readdirSync(includeFrom, { withFileTypes: true });

  for (const dirent of dirents) {
    // get absolute path
    const fullPath = `${includeFrom}/${dirent.name}`;

    if (dirent.isDirectory()) {
      files.push(...getAllFiles({ includeFrom: fullPath }));
    } else {
      const absolutePath = path.resolve(fullPath);
      files.push(absolutePath);
    }
  }

  return files;
}
