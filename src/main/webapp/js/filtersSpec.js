describe('filters', function() {

  beforeEach(module('filters'));


  describe('firstUpTailLower', function() {

    it('HALLO => Hallo',
       inject(function(filter) {
         expect(filter("HALLO")).toBe('Hallo');
         expect(filter("Hallo")).toBe('Hallo');
         expect(filter("hallo")).toBe('Hallo');
       }));
  });
});

