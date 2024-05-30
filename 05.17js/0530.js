// 1. Массив болон тоо өгөгдөв. Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол -1 буцаа
// const a = [10, 11, 12, 14, 9, 20, 3, 23];
// const b = 23
// function find(toonuud, target) {
//     for (let i = 0; i < toonuud.length; i++) {
//         if (toonuud[i] == target) {
//             return i
//         }
//     } return -1
// }
// const result = find(a, b);
// console.log(result);

// 2. Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
//     Жич: 1 2 3 4 5 -> 5 1 2 3 4
const a = [1, 2, 3, 4, 5];
function rearrange(num) {
    let d = 1;
    for (let i = a.length; i < 0; i++) {
        let temp = num[d];
        num[d] = num[i]
        num[i] = temp;
        d++;
    }
    return num;
}

const result = rearrange(a);
console.log(result);

// 3. Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа