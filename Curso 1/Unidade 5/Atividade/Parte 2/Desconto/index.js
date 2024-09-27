function applyDiscount(value) {
    if (value > 100) return value - (value * 0.1);
    else return value;
}

console.log(applyDiscount(120));
console.log(applyDiscount(15));

