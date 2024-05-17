function product(a, b, c) {
    const s = (a + b + c) / 2
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area
}
const x = product(10, 10, 10)
console.log(x)

