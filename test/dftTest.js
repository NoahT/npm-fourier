const assert = require('chai').assert,
dft = require('./../src/dft'),
idft = require('./../src/idft');

const delta = 0.01;


/**
Selection of unit tests for the 1D discrete Fourier transformation.
The unit tests are based off test cases found below, in which each case
was first approximated through Matlab.
https://www.dsprelated.com/showthread/comp.dsp/71595-1.php
*/
describe('Discrete Fourier Transform/Inverse Discrete Fourier Transform', function() {
  describe('Edge cases', function() {
    it('Should throw an error when invalid types are presented', function() {
      let invalid = ['', new Object(), 0, true, {}];
      for(let i in invalid) {
        try {
          dft(invalid[i]);
          assert.fail();
        } catch(e) {
          // test passed
        }
      }
    });

    it('Should return an empty array for empty sample array', function() {
      let startArr = [],
      forward = dft(startArr),
      forwardExp = [],
      backward = idft(forwardExp);
      deepEqualArrayDelta(forward, forwardExp);
      deepEqualArrayDelta(backward, startArr);
    });

    it('Should return all zeros for zero sample array', function() {
      let startArr = [[0, 0], [0, 0], [0, 0], [0, 0]],
      forward = dft(startArr),
      forwardExp = [[0, 0], [0, 0], [0, 0], [0, 0]],
      backward = idft(forwardExp);
      deepEqualArrayDelta(forward, forwardExp);
      deepEqualArrayDelta(backward, startArr);
    });
  });

  describe('General cases', function() {
    it('Should handle samples that alternate between real and imaginary components', function() {
      let startArr = [[1, 0], [0, 1], [1, 0], [0, 1]],
      forward = dft(startArr),
      forwardExp = [[2, 2], [0, 0], [2, -2], [0, 0]],
      backward = idft(forwardExp);
      deepEqualArrayDelta(forward, forwardExp, delta);
      deepEqualArrayDelta(backward, startArr, delta);
    });

    it('Should handle samples where input is e^(8*j*2*pi*i/N)=[cos(16PI*i/N), sin(16PI*i/N)] for i = 0,1,2, ...,N-1', function() {
      // deepEqualArrayDelta(dft(arrayFromBaseFrequency(16 * Math.PI, 4)), [[4, 0], [0, 0], [0, 0], [0, 0]], delta);

      let startArr = arrayFromBaseFrequency(16 * Math.PI, 4),
      forward = dft(startArr),
      forwardExp = [[4, 0], [0, 0], [0, 0], [0, 0]],
      backward = idft(forwardExp);
      deepEqualArrayDelta(forward, forwardExp, delta);
      deepEqualArrayDelta(backward, startArr, delta);
    });

    it('Should handle samples where input is cos(8*2*pi*i/N) for i = 0,1,2, ...,N-1', function() {
      // deepEqualArrayDelta(dft(realArrayFromBaseFrequency(16 * Math.PI, 4)), [[4, 0], [0, 0], [0, 0], [0, 0]], delta);

      let startArr = realArrayFromBaseFrequency(16 * Math.PI, 4),
      forward = dft(startArr),
      forwardExp = [[4, 0], [0, 0], [0, 0], [0, 0]],
      backward = idft(forwardExp);
      deepEqualArrayDelta(forward, forwardExp, delta);
      deepEqualArrayDelta(backward, startArr, delta);
    });

    it('Should handle samples where input is e^((43/7)*j*2*pi*i/N)=[cos((86/7)*pi*i/N), sin((86/7)*pi*i/N)] for i = 0,1,2, ...,N-1', function() {
      // deepEqualArrayDelta(dft(arrayFromBaseFrequency((43/7) * 2 * Math.PI, 4)), [[0.14, -0.41], [0.5, -0.24], [3.66, 1.28], [-0.30, -0.63]], delta);

      let startArr = arrayFromBaseFrequency((43/7) * 2 * Math.PI, 4),
      forward = dft(startArr),
      forwardExp = [[0.14, -0.41], [0.5, -0.24], [3.66, 1.28], [-0.30, -0.63]],
      backward = idft(forwardExp);
      deepEqualArrayDelta(forward, forwardExp, delta);
      deepEqualArrayDelta(backward, startArr, delta);
    });

    it('Should handle samples where input is cos((43/7)*2*pi*i/N) for i = 0,1,2, ...,N-1.', function() {
      // deepEqualArrayDelta(dft(realArrayFromBaseFrequency((43/7) * 2 * Math.PI, 4)), [[0.14, 0], [0.10, 0.19], [3.66, 0], [0.10, -0.19]], delta);

      let startArr = realArrayFromBaseFrequency((43/7) * 2 * Math.PI, 4),
      forward = dft(startArr),
      forwardExp = [[0.14, 0], [0.10, 0.19], [3.66, 0], [0.10, -0.19]],
      backward = idft(forwardExp);
      deepEqualArrayDelta(forward, forwardExp, delta);
      deepEqualArrayDelta(backward, startArr, delta);
    });
  });
});




function deepEqualArrayDelta(act, exp, delta) {
  for(let i = 0; i < act.length; i++) {
    assert.closeTo(act[i][0], exp[i][0], (delta === undefined) ? 0 : delta);
    assert.closeTo(act[i][1], exp[i][1], (delta === undefined) ? 0 : delta);
  }
}

function arrayFromBaseFrequency(baseFreq, len) {
  let arr = [];
  for(let i = 0; i < len; i++) {
    arr[i] = [Math.cos(baseFreq * i / len), Math.sin(baseFreq * i / len)];
  }
  return arr;
}

function realArrayFromBaseFrequency(baseFreq, len) {
  return arrayFromBaseFrequency(baseFreq, len).map(e => [e[0], 0]);
}

function imaginaryArrayFromBaseFrequency(baseFreq, len) {
  return arrayFromBaseFrequency(baseFreq, len).map(e => [0, e[1]]);
}


