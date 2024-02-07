function  password(obj){
    let siteNameArr = obj.siteName.split("");
    siteNameArr[0] = siteNameArr[0].toUpperCase();

    
    let birthLen = Array.from(String(obj.birthYear),Number).length;

    let reArrange =siteNameArr.join("");
    
    let result = "";

    if(birthLen < 4 || Object.keys(obj).length < 3){
        result = 'invalid'
    }else{
        result = reArrange+"#"+obj.name+"@"+obj.birthYear
    }

    return result;
}

const alpha = password({name:'johnCena',birthYear:2000,siteName:'ph-hero'});

console.log(alpha);