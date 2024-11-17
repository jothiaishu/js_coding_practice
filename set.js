function removeDuplicates(str) {
    let unique = new Set(str)

    return [...unique].join("")
}


const stri = "jjooththhhi"
const result = removeDuplicates(stri)
console.log(result)