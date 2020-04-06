'use strict';

require('run-with-mocha');

const assert = require('assert');
const toValidBitDepth = require('../../../src/utils/utils/toValidBitDepth');

describe('utils/toValidBitDepth()', () => {
  it('return valid bit depth', () => {
    assert(toValidBitDepth(8) === 8);
    assert(toValidBitDepth(16) === 16);
    assert(toValidBitDepth(32) === 32);
  });

  it('return the default bit depth 16 when provided an invalid bit depth', () => {
    assert(toValidBitDepth(0) === 16);
    assert(toValidBitDepth(NaN) === 16);
  });
});
