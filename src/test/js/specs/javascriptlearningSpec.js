describe('Javascript Learning', function () {

  var count;

  beforeEach(function () {
    count = 0;
  });

  describe("Compare", function () {
    it("is green", function () {
      expect(true).toBe(true);
    });
  });

  it("count", function() {
    expect(count).toBe(0);
  })

});
