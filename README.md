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


### `fnRunRight`
### `fnAsyncRun`
TBD
