export enum LogLevel {
  info = 0,
  warn = 1,
  debug = 2,
}
const INF = "[INFO]     - ";
const WRN = "[WARNING]  - ";
const DBG = "[DEBUG]    - ";

export class Logger {
  private static logLevel: LogLevel = LogLevel.debug;
  private constructor() {}

  public static logInfo(...args: unknown[]) {
    if (Logger.logLevel >= LogLevel.info) console.log(INF, ...args);
  }

  public static logWarn(...args: unknown[]) {
    if (Logger.logLevel >= LogLevel.warn) console.warn(WRN, ...args);
  }

  public static logDebug(...args: unknown[]) {
    if (Logger.logLevel >= LogLevel.debug) console.debug(DBG, ...args);
  }

  public static setLogLevel(level: LogLevel) {
    Logger.logLevel = level;
  }

  public static getLogLevel(): LogLevel {
    return Logger.logLevel;
  }
}
