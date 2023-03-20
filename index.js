// Code your solution here
function findMatching(arr, str){
    return arr.filter(i => i.toLowerCase() == str.toLowerCase());
}

function fuzzyMatch(array, str){
    let newArray = array.filter(i =>{ 
        let letters = ""
        for (let letter = 0; letter < str.length; letter++){
            letters += i[letter];
        }
        return letters == str
        })
    return newArray
}

function matchName(arr, str){
    let newArray = arr.filter(i => i.name == str)
    return newArray;
}