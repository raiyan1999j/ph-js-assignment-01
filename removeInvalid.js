function deleteInvalids(array){
    let arr =[];
    
    if(Array.isArray(array)){
        for(let item of array){
            if(typeof(item) === 'number' && !isNaN(item)){
                arr.push(item);
            }
        }
    }else{
        return 'input must be an array'
    }
    return arr;
}

const alpha = deleteInvalids(["1",2,NaN,3,-10,undefined,{name:'raiyan',roll:12}]);

console.log(alpha);