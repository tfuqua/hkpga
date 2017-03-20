
export function mapObjectToArray(obj){
    let arr = []

    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            arr.push({...obj[k], id: k });
        }
    }

    return arr;
}