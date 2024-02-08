function monthlySavings(arr,livingCost){
    let income = 0;
    let container=[];
    let context ="";

    if(!Array.isArray(arr) || typeof(livingCost) !== 'number' || arr.every(value => typeof(value) !== 'number')){
        context = 'invalid input';
    }else{
        for(let repeat of arr){
            if(repeat >= 3000){
                let taxRate = (repeat * 20) / 100;
                let deduct = repeat - taxRate;
    
                container.push(deduct)
            }else{
                container.push(repeat)
            }
        }
    
        for(let count of container){
            income += count;
        }

        if(income - livingCost < 0){
            context = 'earn more'
        }else{
            context = `Total savings ${income - livingCost}`;
        }
    }

    return context;
}

const alpha = monthlySavings([7000,5000,2000],12000);

console.log(alpha)