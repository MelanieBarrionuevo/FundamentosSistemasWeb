let prompt = require("prompt-sync")();

const temperaturesC = [0, 20, 30, 100];
const temperaturesF = temperaturesC.map(c => (c * 9/5) + 32);
console.log(temperaturesF); 