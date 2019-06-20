const assert = require('chai').assert,
dft = require('./../src/dft');

describe('Discrete Fourier Transform', function() {

  describe('Edge cases', function() {
    it('Should throw an error when invalid types are presented.', function() {
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

    it('Should return an empty array for empty sample array.', function() {
      assert.deepEqual(dft([]), []);
    });
  });

  describe('General cases', function() {
    it('Should handle samples that have only real components', function() {
      
    });

    it('Should handle samples that have only imaginary components', function() {

    });

    it('Should handle samples that have both imaginary and real components', function() {

    });
  });

});