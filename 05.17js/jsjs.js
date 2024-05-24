// -Өгөгдсөн тоо эерэг бол "positive" ,
//  сөрөг бол "negative" , 0 бол "zero" гэж хэвлэнэ үү .

// function oloh(a) {
//     if (a == 0) {
//         return "Zero"
//     }
//     if (a > 0) {
//         return "Positive"
//     } else {
//         return "Negative"
//     }

// }
// const x = oloh(-2)
// console.log(x)

// -Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 
// 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү.

// function nasshalgah(a) {
//     if (a > 18) {
//         return console.log("You are old enough to drive")
//     } else {
//         return console.log(`"You are left with" ${18 - a} "years to drive"`)

//     }
// }
// const x = nasshalgah(19)

// const 1 == true
// const 0 == false
// console.log(!(1 || (0 && 1 && 1) || 0))
// console.log((1 || 1 || 0 && 1 || (1 || 0) && 1))
// console.log(!(1 == 0))
// console.log(!(0 || 0))

// function nasshalgah(a) {
//     const b=
//     if (a > 18) {
//         return console.log("You are old enough to drive")
//     } else {
//         return console.log(`"You are left with" ${18 - a} "years to drive"`)

//     }
// }
// const x = nasshalgah(19)

function angioloh(age, gender) {
    if ((age >= 6 && age <= 17) && gender == "er") {
        return console.log(`${age - 5}-r angiin suragch eregtei suragch `)
    } else if ((age >= 6 && age <= 17) && gender == "em") {
        return console.log(`${age - 5}-r angiin emegtei suragch `)
    } else if (age < 6) {
        console.log(`Tsetserlegiin maamaa min surguuld orohod ${6 - age} jil vldsen baina.`)
    } else if (age > 17) {
        console.log(`Ta ulirsan eswel surguuld hotsorch oroogvi l bol arwan jilee togsood ${age - 17} jil bolj baina`)
    }
}
const x = angioloh(15, "er")

// // -Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .

// function oloh(a) {
//     if (a % 2 == 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// const x = oloh(2)
// console.log(x)

// -Өгөгдсөн нас нь 14-өөс доош бол "Children", 14-24 бол "Youth" , 24-64 бол "Adults" ,
//  64-өөс дээш бол "Seniors" гэж хэвлэнэ үү .
// function oloh(a) {
//     if (a < 14) {
//         return "Children"
//     } else if (a >= 14 && a < 24) {
//         return "Youth"
//     } else if (a >= 24 && a < 64) {
//         return "Adults"
//     } else {
//         return "Seniors"
//     }
// }
// const x = oloh(70)
// console.log(x)

// -Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .
//  for example : 
//       a=5 b=6 c=7 / is valid 
//       a=4 b=8 c=19 / is invalid 

// function oloh(a, b, c) {
//     if (a <= b + c && b <= a + c && c <= a + b) {
//         return "is Valid"
//     } else {
//         return "is invalid"
//     }
// }

// const x = oloh(4, 8, 19)
// console.log(x)

// // Өгөгдсөн 2 тооноос ихийг нь олж хэвлэнэ үү .
// function oloh(a, b) {
//     if (a < b) {
//         return b
//     } else {
//         return a
//     }
// }

// const x = oloh(12, 8)
// console.log(x)

// // Өгөгдсөн 2 тооноос ихийг нь олж хэвлэнэ үү .
// const x = [1, 12, 561111, 8, 15, 25, 21412]
// console.log(Math.max(...x))
