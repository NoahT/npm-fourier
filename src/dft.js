/**
Functionality for computing the discrete Fourier transform (DFT).
This is done using a brute-force O(N^2) algorithm on the complex
plane.
*/

/**
brute-force O(N^2) calculation for the DFT,
where N represents the number of samples in
a time-based domain
*/
let dft = function(samp) {
  // guard clause to keep valid samples
  if(!(samp instanceof Array)) {
    throw new TypeError(`${samp} is not an instance of Array!`);
  }
  let F = [],
  N = samp.length,
  // complex element in the form [re, im]. this algorithm
  // uses Euler's instead to compute the real and imaginary
  // components
  comp,
  theta;
  // number of given samples will be the number of frequency bins
  for(let n = 0; n < N; n++) {
    comp = [0, 0];
    for(let k = 0; k < N; k++) {
      theta = (2 * Math.PI * n * k) / N;
      // real correlation coefficient
      comp[0] += (samp[k] * Math.cos(theta));
      // imaginary correlation coefficient
      comp[1] -= (samp[k] * Math.sin(theta));
    }
    F[n] = comp;
  }
  return freq;
}

module.exports = {
  dft: dft
}



