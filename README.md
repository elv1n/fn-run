# fn-run

A typed utility library to run and debug composition functions

### Installation
```shell script
yarn add fn-run
npm i fn-run --save
```  

### Usage

### `fnRun`
Functions composition are being invoked in direct order

```typescript
import { fnRun } from 'fn-run';

const add = (b: number) => (a: number) => b + a;
const getString = (result: number) => console.log(`Result: ${result}`);

fnRun(add(3), add(5), getString, console.log)(1);
```
### `fnRunDebug`
Run `fnRun` with debug output in a console.table

```typescript
import { fnRunDebug } from 'fn-run';

fnRunDebug(parseFloat, console.log)('1');
// output:
// [['initial', '1'], [parseFloat, 1], [log, undefined]]
```

### `fnRace`
The same as `fnRun` with different types declaration specifically designed for a single type for all functions. Useful to use with arrays as typescript cannot understand types from carrying function and sets `unknown`.

```typescript
// declare generic type for an array
fnRace<Array<{id: number}>>(
    arr => arr.concat([{id: 2}]),
    arr => arr.concat([{id: 3}]),
)([{ id: 1}])
```


### `fnRunRight`
### `fnAsyncRun`
TBD
