/**
Functionality for computing the discrete Fourier transform (DFT).
This is done using a brute-force O(N^2) algorithm on the complex
plane. More information can be found here:
https://ccrma.stanford.edu/~jos/mdft/Mathematics_DFT.html
*/

const Complex = require('npm-complex').Complex;

/**
brute-force O(N^2) calculation for the DFT,
where N represents the number of samples in
a time-based domain. The collection of samples
is not limited to the field of reals. Instead,
our time-based domain may also encapsulate complex
numbers in the form [re, im].

@param {number[][]} samp
@return {number[][]}
*/
let dft = function(samp) {
  // guard clause to keep valid samples
  if(!(samp instanceof Array)) {
    throw new TypeError(`${samp} is not an instance of Array!`);
  }
  // 2D array, since we keep track of real and imaginary components
  // from DFT
  let F = [],
  N = samp.length,
  compSum = new Complex(),
  compOne = new Complex(),
  compTwo = new Complex(),
  // complex element in the form [re, im]. this algorithm
  // uses Euler's instead to compute the real and imaginary
  // components
  theta;
  // number of given samples will be the number of frequency bins
  for(let n = 0; n < N; n++) {
    compSum.setTuple([0, 0]);
    for(let k = 0; k < N; k++) {
      compOne.setTuple([samp[k][0], samp[k][1]]);
      theta = (2 * Math.PI * n * k) / N;
      compTwo.setTuple([Math.cos(theta), -Math.sin(theta)]);
      compOne.foil(compTwo.getTuple());
      compSum.addTuple(compOne.getTuple());
    }
    F[n] = compSum.getTuple();
  }
  return F;
}

module.exports = dft;



