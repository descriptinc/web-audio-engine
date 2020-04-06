'use strict';

require('run-with-mocha');

const assert = require('assert');
const toPowerOfTwo = require('../../../src/utils/utils/toPowerOfTwo');

describe('utils/toPowerOfTwo(value)', () => {
  it('convert to 2^n', () => {
    assert(toPowerOfTwo(1) === 1);
    assert(toPowerOfTwo(2) === 2);
    assert(toPowerOfTwo(3) === 4);
    assert(toPowerOfTwo(3, Math.floor) === 2);
    assert(toPowerOfTwo(3, Math.ceil) === 4);
  });
});
