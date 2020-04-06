'use strict';

require('run-with-mocha');

const assert = require('assert');
const toNumber = require('../../../src/utils/utils/toNumber');

describe('utils/toNumber(value)', () => {
  it('convert to number', () => {
    assert(toNumber(1) === 1);
    assert(toNumber(Infinity) === Infinity);
    assert(toNumber('1') === 1);
    assert(toNumber(NaN) === 0);
  });
});
