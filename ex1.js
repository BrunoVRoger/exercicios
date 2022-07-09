function maskify(string){
    let result = ""

    for (let index = 0; index < string.length - 4 ; index ++){
        result += "#"
    }
    return result + string.slice(-4)
}

console.log(maskify('55555555555555'))