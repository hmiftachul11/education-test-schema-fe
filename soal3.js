let y = 6;
var str1 = ""
var str2 = ""

// OUTPUT 1
for (i = 1; i < 7; i++) {
    for (j = 1; j < 7; j++) {
        if (i >= j) {
            str1 = str1.concat("*")
        }
    }
    str1 = str1.concat("\n")
}

console.log(str1)

// OUTPUT 2
for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
        if (i + j >= y) {
            str2 = str2.concat("*");
        } else {
            str2 = str2.concat(" ")
        }
    }
    str2 = str2.concat("\n")
}

console.log(str2)