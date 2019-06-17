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
  // 2D array, since we keep track of real and imaginary components
  // from DFT
  let F = [],
  N = samp.length,
  // complex element in the form [re, im]. this algorithm
  // uses Euler's instead to compute the real and imaginary
  // components
  re, im,
  theta;
  // number of given samples will be the number of frequency bins
  for(let n = 0; n < N; n++) {
    re = im = 0;
    for(let k = 0; k < N; k++) {
      theta = (2 * Math.PI * n * k) / N;
      // real correlation coefficient
      re = (samp[k] * Math.cos(theta));
      // imaginary component
      im -= (samp[k] * Math.sin(theta));
    }
    F[n] = [re, im];
  }
  return F;
}

module.exports = {
  dft: dft
}



