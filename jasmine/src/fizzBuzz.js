function Count() {
	this._number = 0;
};

Count.prototype.number = function() {
  return this._number;
};

Count.prototype.set_number = function(number) {
  this._number = number;
};