// From the given array, we find the value of key
export function findValueByKey(keyName:string, arr:{ [key: string]: number }[]) {
    const foundObj = arr.find(obj => obj.hasOwnProperty(keyName));
    return foundObj ? foundObj[keyName] : null;
}