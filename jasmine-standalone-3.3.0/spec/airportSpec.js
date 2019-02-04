describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("should begin with an empty hanger", function() {
    expect(airport.hanger()).toEqual([])
  });

  it("should store a plane in the hanger when plane lands" , function() {
    airport.land('plane')
    expect(airport.hanger()).toEqual(['plane'])
  });

  it("should allow a plane to take off from the airport" , function() {
    airport.land('plane')
    airport.take_off()
    expect(airport.hanger()).toEqual([])
  });

});
