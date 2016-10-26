function Javabuzz () {};

Javabuzz.prototype.isDivisibleBy = function(number, divisor) {
	return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByThree = function (number, divisor) {
	return this.isDivisibleBy(number, 3); 
};
Javabuzz.prototype.isDivisibleByFive = function (number, divisor) {
	return this.isDivisibleBy(number, 5);
};
Javabuzz.prototype.isDivisibleByFifteen = function (number, divisor) {
	return this.isDivisibleBy(number, 15);
};
