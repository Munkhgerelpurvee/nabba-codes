let person = {
    firstName: "Naba",
    lastName: "M",
    age: 26,
    nation: "Mongol",
    eye: {
        eyeColor: "Bor",
        eyeGlass: {
            eyeGlassColor: "Saaral",
        }
    },
    hobby: ["Sags", "Hool"],
    gerlelt: ["Gerlesen", "Ganst biy"],
}

const getMarriageStatus = (isMarried) => {
    if (isMarried) {
        return person.gerlelt[0]
    } else { return person.gerlelt[1] }
}

let myInformation = `Namaig ${person.firstName}  gedeg bi ${person.age} nastai. 
${person.nation} ornoos irsen. ${person.eye.eyeColor} ongiin nvdtei. ${person.eye.eyeGlass.eyeGlassColor} ongiin nvdnii shil zvvdeg. ${person.hobby[0]} togloh durtai. Bi ${getMarriageStatus(person.gerlelt)}. `

console.log(myInformation)