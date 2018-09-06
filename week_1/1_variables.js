// Hoisting 추가 설명 필요
var a = "a";
console.log(a);

if (true) {
	var a = "a2";
	console.log(a);
}
console.log(a);

// ----------------------------------------

let b = "b";
console.log(b);

if (true) {
	let b = "b2";
	console.log(b);
}
console.log(b);

// ---------------------------------------

var c = "c";
console.log(c);

(function() {
 	var c = "c2";
	console.log(c);
})();
console.log(c);
