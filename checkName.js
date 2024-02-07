function checkName(name){
    if(typeof(name) === 'number' || typeof(name) === 'object'||typeof(name) === 'undefined'){
        return 'Invalid'
    }else{
    const container = ['a','y','i','e','o','u','w'];
    const value = name.toLowerCase();
    const len = value.length;
    const testWord = value[len - 1];
    let result = "Bad Name";

    for(let repeat of container){
        if(testWord == repeat){
            result = "Good Name";
        }
    }

    return result;
    }
}



console.log(checkName('raiyana'));