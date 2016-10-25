describe("Count", function()  {
  var count;

  beforeEach(function() {
  	count = new Count();
  });


	it("should print the number 1", function() {
		count.set_number(1)
		expect(count.number()).toEqual(1);
	});
});
