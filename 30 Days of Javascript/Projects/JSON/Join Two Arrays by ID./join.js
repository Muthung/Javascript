var join = function(arr1, arr2) {
    const idToObject = {};

    for (const obj of arr1) {
        idToObject[obj.id] = idToObject[obj.id] ? { ...idToObject[obj.id], ...obj } : obj;
    }

    for (const obj of arr2) {
        idToObject[obj.id] = idToObject[obj.id] ? { ...idToObject[obj.id], ...obj } : obj;
    }

    const joinedArray = Object.values(idToObject);

    joinedArray.sort((a, b) => a.id - b.id);

    return joinedArray
}