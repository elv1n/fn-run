/* eslint-disable no-console */
import { fnRun, fnRunDebug } from './fnRun';

const toString = (n: number | boolean) => `${n}`;
const toBoolean = (n: string | number) => Boolean(n);

describe('fnRun', () => {
  it('should run empty fnRun', () => {
    expect(fnRun()(22)).toEqual(22);
  });
  it('should run fnRun for a function ', () => {
    expect(fnRun(toString)(22)).toEqual('22');
  });
  it('should run fnRun for two functions', () => {
    expect(fnRun(toString, parseFloat)(22)).toEqual(22);
  });
  it('should run fnRun for three functions', () => {
    expect(fnRun(toString, parseFloat, toBoolean)(22)).toEqual(true);
  });
  it('should run fnRun for four functions', () => {
    expect(fnRun(toString, parseFloat, toBoolean, toString)(22)).toEqual(
      'true'
    );
  });
  it('should run fnRun for five functions', () => {
    expect(
      fnRun(parseFloat, toString, parseFloat, toString, parseFloat)('22')
    ).toEqual(22);
  });
  it('should run fnRun for six functions', () => {
    expect(
      fnRun(
        toString,
        parseFloat,
        toString,
        parseFloat,
        toString,
        parseFloat
      )(22)
    ).toEqual(22);
  });
  it('should run fnRun for seven functions', () => {
    expect(
      fnRun(
        toString,
        parseFloat,
        toString,
        parseFloat,
        toString,
        parseFloat,
        toString
      )(22)
    ).toEqual('22');
  });
  it('should run fnRun for eight functions', () => {
    expect(
      fnRun(
        toString,
        parseFloat,
        toString,
        parseFloat,
        toString,
        parseFloat,
        toString,
        parseFloat
      )(22)
    ).toEqual(22);
  });
  it('should run fnRun for nine functions', () => {
    expect(
      fnRun(
        toString,
        parseFloat,
        toString,
        parseFloat,
        toString,
        parseFloat,
        toString,
        parseFloat,
        toString
      )(22)
    ).toEqual('22');
  });
});

describe('fnRunDebug', () => {
  it('should run empty with console', () => {
    console.table = jest.fn();
    expect(fnRunDebug(parseFloat, toString)('2')).toEqual('2');
    expect(console.table).toBeCalledTimes(1);
    expect(console.table).toBeCalledWith([
      ['initial', '2'],
      ['parseFloat'],
      2,
      ['toString'],
      '2',
    ]);
  });
});
