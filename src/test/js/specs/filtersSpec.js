describe('filtersSpec', function () {

  beforeEach(module('filters'));

  describe('firstUpTailLower', function () {
    it('HALLO => Hallo', inject(function (firstUpTailLower) {
      expect(firstUpTailLower("HALLO")).toBe('Hallo');
      expect(firstUpTailLower("Hallo")).toBe('Hallo');
      expect(firstUpTailLower("hallo")).toBe('Hallo');
    }));
  });
});
