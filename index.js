// Write your solution in this file!

let employee = {
    name: "Brian",
    steetAddress: '715 W 172St',
};

function updateEmployeeWithKeyAndValue(obj, key, val) {
    let newObj = {
        ...obj,
        [key]: val
    }
    return newObj
}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val){
    obj[key] = val;
    return obj
};

function deleteFromEmployeeByKey(obj, key){
    let newObj = {
        ...obj
    }
    delete newObj[key]
    return newObj
};

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj
}

