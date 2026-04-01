// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFn = (...args: any[]) => unknown;

export const useOncePerTick = <T extends AnyFn>(fn: T): T => {
  let hasRun = false;

  const wrapped = ((...args: unknown[]) => {
    if (hasRun) {
      return;
    }

    hasRun = true;
    const result = fn(...args);
    nextTick(() => {
      hasRun = false;
    });
    return result;
  }) as T;

  return wrapped;
};
