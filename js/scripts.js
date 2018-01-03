function getTriangleArea(a, h) {
	if ((a >= 0) && (h >= 0)) {
		return a * h / 2;
	}
	else {
		return 'Niepoprawne dane';
	}
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 11);
var triangle3Area = getTriangleArea(-7, 14);
console.log(triangle1Area, triangle2Area, triangle3Area);