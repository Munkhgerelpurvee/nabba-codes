// const a = "88280102";
// const b = "99280102";

// function findoperator(y) {
//     const firstTwo = y.slice(0, 2);
//     switch (firstTwo) {
//         case "94":
//         case "99":
//             return "Mobicom";
//         case "88":
//             return "Unitel";
//         default:
//             return "invalid number"
//     }
// }
// const result = findoperator(b);
// console.log(result);

// const arr2 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];
// const b = []
// function findoperator(a) {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a[i].length; j++) {
//             if (i == j) {
//                 b.push(a[i][j])
//             }
//         }
//     }
//     return b

// }
// const result = findoperator(arr);
// console.log(result);

const a = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const printDiagnol = (arr) => {
    for (const i in arr) {
        console.log(arr[i][i])
    }
}
printDiagnol(a)
