console.log("5" + 5);
console.log(5 + " apples");
console.log(10 + "2" + 3);
console.log(10 + 2 + "3");

let x = '123and$%^&Characters';
console.log(parseInt(x));
// Why did the extra characters disappear? a: parseInt: It extracts the numeric digits from the beginning of a string and stops as soon as it hits a non-numeric character
x = 'mmm123and$%^&*Characters';
console.log(parseInt(x));
// Why does this happen? a: because parseint extracts numeric digits from the beginning and in this case it doesnt find any, so it returns NaN.
x = '123and$%^&*';
x = parseInt(x);
console.log(x + 10); //133?
x = '5.1';
console.log (typeof(x));
x = parseFloat(x);
console.log(x);
console.log(parseFloat("3.14"));
console.log(parseFloat("10.5px"));
console.log(parseFloat(" -7.2e3")); 
console.log(parseFloat("abc123")); // NaN
let y = 0;
console.log(Boolean(y)); // False
y = ' ';
console.log(Boolean(y)); // True
y = '';
console.log(Boolean(y)); // False