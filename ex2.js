function updateData(currentObject, newDataObject) {
    let result = {}
    Object.entries(currentObject).forEach(([key,value]) => {
        result[key] = newDataObject[key] !== void(0) ? newDataObject[key] : value
    })
    return result
   }
   module.exports = updateData

console.log(updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 }))