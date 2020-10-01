type Func<T1, T2> = (a1: T1) => T2;

export function fnRun<R>(): (a1: R) => R;

export function fnRun<T1, R>(f1: Func<T1, R>): Func<T1, R>;

export function fnRun<T1, T2, R>(
  f1: Func<T1, T2>,
  f2: Func<T2, R>
): Func<T1, R>;

export function fnRun<T1, T2, T3, R>(
  f1: Func<T1, T2>,
  f2: Func<T2, T3>,
  f3: Func<T3, R>
): Func<T1, R>;

export function fnRun<T1, T2, T3, T4, R>(
  f1: Func<T1, T2>,
  f2: Func<T2, T3>,
  f3: Func<T3, T4>,
  f4: Func<T4, R>
): Func<T1, R>;

export function fnRun<T1, T2, T3, T4, T5, R>(
  f1: Func<T1, T2>,
  f2: Func<T2, T3>,
  f3: Func<T3, T4>,
  f4: Func<T4, T5>,
  f5: Func<T5, R>
): Func<T1, R>;
export function fnRun<T1, T2, T3, T4, T5, T6, R>(
  f1: Func<T1, T2>,
  f2: Func<T2, T3>,
  f3: Func<T3, T4>,
  f4: Func<T4, T5>,
  f5: Func<T5, T6>,
  f6: Func<T6, R>
): Func<T1, R>;
export function fnRun<T1, T2, T3, T4, T5, T6, T7, R>(
  f1: Func<T1, T2>,
  f2: Func<T2, T3>,
  f3: Func<T3, T4>,
  f4: Func<T4, T5>,
  f5: Func<T5, T6>,
  f6: Func<T6, T7>,
  f7: Func<T7, R>
): Func<T1, R>;

export function fnRun<T1, T2, T3, T4, T5, T6, T7, T8, R>(
  f1: Func<T1, T2>,
  f2: Func<T2, T3>,
  f3: Func<T3, T4>,
  f4: Func<T4, T5>,
  f5: Func<T5, T6>,
  f6: Func<T6, T7>,
  f7: Func<T7, T8>,
  f8: Func<T8, R>
): Func<T1, R>;

export function fnRun<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(
  f1: Func<T1, T2>,
  f2: Func<T2, T3>,
  f3: Func<T3, T4>,
  f4: Func<T4, T5>,
  f5: Func<T5, T6>,
  f6: Func<T6, T7>,
  f7: Func<T7, T8>,
  f8: Func<T8, T9>,
  f9: Func<T9, R>
): Func<T1, R>;

export function fnRun<R>(...fns: any[]): (...args: any[]) => R {
  return (initial: any) => fns.reduce((acc, fn) => fn(acc), initial);
}

type FnRun = typeof fnRun;

export const fnRunDebug: FnRun = (...fns: any[]) => {
  return (initial: any) => {
    const logs: any[] = [['initial', initial]];
    const result = fns.reduce((acc, fn) => {
      const res = fn(acc);
      logs.push([fn.name], res);
      return res;
    }, initial);
    console.table(logs);
    return result;
  };
};
