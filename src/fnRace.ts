export function fnRace<R>(...fns: Array<(arg: R) => R>): (...args: R[]) => R {
    return (initial: R) => fns.reduce((acc, fn) => fn(acc), initial);
}
