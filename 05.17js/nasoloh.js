// function nas(a) {
//     if (a <= 18) {
//         return "nasand hvreegvi"
//     } else { return "arhind orson" }
// }
// const x = nas(22)
// console.log(x)

// Dasgal 10 Гурвалжингийн периметрийг олох 
// function calcperimetr(a, b, c) {
//     const s = (a + b + c)
//     return s
// }
// const x = calcperimetr(45, 10, 10)
// console.log(x)

// Dasgal 11 Тойргийн талбайг олох 
// function calccirclearea(a) {
//     const area = (Math.PI * Math.pow(a, 2))
//     return area
// }
// const x = calccirclearea(2)
// console.log(x)

// Dasgal 12 m = y*2-y*1/x*2-x*1
// function dasgal12(x, y) {
//     const m = ((y * 2) - (y)) / ((x * 2) - (x))
//     return m
// }
// const b = dasgal12(1, 2)
// console.log(b)

// dasgal13 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?
// function Gegabyte(a) {
//     const bit = a * 8 * Math.pow(1024, 3)
//     return bit
// }
// const x = Gegabyte(15)
// console.log(x)

// dasgal14 15 МB дата 3 секундэд манай интернэт 
// онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
function dasgal14(a, b) {
    const bitrate = (a / b) * (8 * Math.pow(10, 6))
    return bitrate
}
const x = dasgal14(15, 3)
console.log(x)

