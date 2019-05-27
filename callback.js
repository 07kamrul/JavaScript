var x = 10;
var y = 20;
var z = 30;
console.log(x);
print(y);
console.log(z);
function print(y) {
	setTimeout(function() {
		console.log(y);
	}, 2000);
}