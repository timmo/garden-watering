describe('filtersSpec', function () {

  beforeEach(module('filters'));

  describe('firstUpTailLower', function () {
    it('HALLO => Hallo',
       inject(function (firstUpTailLower) {
         expect(firstUpTailLower("HALLO")).toBe('Hallo');
         expect(firstUpTailLower("Hallo")).toBe('Hallo');
         expect(firstUpTailLower("hallo")).toBe('Hallo');
       }));
  });

  describe('ProgramStatus', function () {
    it('HALLO => Hallo',
       inject(function (ProgramStatus) {
         expect(ProgramStatus("HALLO")).toBe('Hallo');
         expect(ProgramStatus("Hallo")).toBe('Hallo');
         expect(ProgramStatus("hallo")).toBe('Hallo');
       }));
  });
});
