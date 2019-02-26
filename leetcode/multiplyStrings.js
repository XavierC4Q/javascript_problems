function multiply(num1, num2) {
  if (!num1 || !num2) return 0;
}

function multiNums(a, b) {
  let total = "";
  let carry = 0;

  let digits = a.split("");

  while (digits.length) {
    let popped = digits.pop();
    let prod = Number(popped) * Number(b) + carry;

    if (prod >= 10) {
      total = prod.toString()[1] + total;
      carry = Number(prod.toString()[0]);
    } else {
      total = prod + total;
      carry = 0
    }
  }

  if (carry) {
      return carry + total
  }
  return total
}

console.log(multiNums("999", "9"));
