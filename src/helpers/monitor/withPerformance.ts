import { Logger } from "../Logger";

interface PerformanceResult<R> {
  result: R;
  time: number;
}

export function withPerformance<T>(fn: () => T): PerformanceResult<T> {
  const start = performance.now();
  const result = fn();
  const end = performance.now();

  Logger.logDebug(`Performance: ${end - start}ms`);
  return {
    result,
    time: end - start,
  };
}
