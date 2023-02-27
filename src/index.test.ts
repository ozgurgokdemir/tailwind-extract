// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { describe, it, expect } from 'vitest';
import { ext } from './index';

describe('ext', () => {
  it('Should join the classnames with a single space', () => {
    const result = ext(['flex', 'items-center', 'justify-center']);
    expect(result).toEqual('flex items-center justify-center');
  });

  it('Should remove unnecessary whitespace at the beginning and end of the classname', () => {
    const result = ext(['  flex', '  items-center  ', 'justify-center  ']);
    expect(result).toEqual('flex items-center justify-center');
  });

  it('Should remove unnecessary whitespace in the middle of the classname', () => {
    const result = ext(['flex', 'items-center   justify-center']);
    expect(result).toEqual('flex items-center justify-center');
  });

  it('Should remove any unnecessary whitespace when input is a string', () => {
    const result = ext('  flex   items-center justify-center  ');
    expect(result).toEqual('flex items-center justify-center');
  });

  it('Should remove invalid inputs and join the classnames with a single space', () => {
    const result = ext(['border', true && 'rounded', 'px-2', false && 'py-2']);
    expect(result).toEqual('border rounded px-2');
  });

  it('Should return an empty string when all inputs are invalid', () => {
    expect(ext([false, null, undefined, 0, {}, []])).toEqual('');
  });

  it('Should return an empty string when input is an empty array', () => {
    expect(ext([])).toEqual('');
  });

  it('Should return an empty string when all inputs are empty string or whitespace', () => {
    expect(ext(['', '  '])).toEqual('');
  });

  it('Should return an empty string when input is an empty string', () => {
    expect(ext('')).toEqual('');
  });

  it('Should return an empty string when input is whitespace', () => {
    expect(ext('  ')).toEqual('');
  });
});
