const ratioFunc = require("../ratio/index");
const factFunc = require("../factorial/index");

function ratioAndFactorial(n1, n2, n3) {
  const ratio = ratioFunc(n1, n2);
  const factorial = factFunc(n3);

  return { ratio, factorial };
}
module.exports = ratioAndFactorial;
