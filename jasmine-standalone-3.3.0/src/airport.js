function Airport() {
  hanger = []
}

Airport.prototype.hanger = function() {
  return hanger;
}

Airport.prototype.land = function(plane) {
  hanger.push(plane) ;
}

Airport.prototype.take_off = function() {
  hanger.pop() ;
}

// var Airport = {
//   hanger: []
// }
