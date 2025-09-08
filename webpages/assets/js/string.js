let text1 = " Sample text           ";
let text2 = text1.trim();
let text3 = "Hello world Hello This is our world";

console.log("Text 1: " + text1.length);

console.log("Text 2: " + text2.length)

console.log("Text 3: " + text3.slice(0, 5));

console.log("Index of Char: " + text3.indexOf('e'));
console.log("Char of index: " + text3.charCodeAt(1));

console.log("Concatination Text: " + text2.concat(" " + text3));

console.log("Separate values: " + text3.split(" "));

console.log("Replace value: " + text3.replace("Hello", "Pakistan"));

console.log("Replace All values: " + text3.replaceAll("Hello", "Pakistan"));
