/**
Functionality for computing the inverse discrete Fourier transform (IDFT).
This is done using a brute-force O(N^2) algorithm on elements in the complex
plane. More information can be found here:
https://ccrma.stanford.edu/~jos/mdft/Mathematics_DFT.html
*/

const Complex = require('npm-complex').Complex;

/**
brute-force O(N^2) calculation for the IDFT,
where N represents the number of samples in
a frequency-based domain. The collection of samples
is not limited to the field of reals. Instead,
complex numbers are permitted as well in the form
[re, im].

@param {number[][]} freq
@return {number[][]} samp
*/
let idft = function(freq) {
  if(!(freq instanceof Array)) {
    throw new TypeError(`${samp} is not an instance of Array!`);
  }

  let f = [],
  N = freq.length,
  compSum = new Complex(),
  compOne = new Complex(),
  compTwo = new Complex(),
  theta;

  for(let n = 0; n < N; n++) {
    compSum.setTuple([0, 0]);
    for(let k = 0; k < N; k++) {
      theta = (2 * Math.PI * k * n) / N;
      compOne.setTuple([freq[k][0], freq[k][1]]);
      compTwo.setTuple([Math.cos(theta) / N, Math.sin(theta) / N]);
      compOne.foil(compTwo.getTuple());
      compSum.addTuple(compOne.getTuple());
    }
    f[n] = compSum.getTuple();
  }
  return f;
}

module.exports = idft;






