
function mindGame(value){
    if(typeof value != 'number'){
        return 'Please Input a Valid Number'
    }

    const multiplication=value*3;
    const add=multiplication+10;
    const divide=add/2;
    const minus=divide-5;

    return minus;
}
const sentValue=mindGame(5);
console.log(sentValue);



function evenOdd(names){
    
    if (typeof names !='string'){
        return 'Dear user, Give us a String'
    }

    if(names.length%2 ==0){
        return "Even"
    }
    else if(names.length%2 !== 0){
        return 'Odd'
    }

 
}
const sentName= evenOdd('moneira');
console.log(sentName);




function isLGSeven(imagingNumber){
    if (typeof imagingNumber != 'number'){
        return 'Error... input a Valid Number Here!!!'
    }

    if (imagingNumber<7){
        const minusImaging=imagingNumber-7;
        return minusImaging;
    }
    else if ( imagingNumber>7){
        const doubleValue= imagingNumber*2;
        return doubleValue;
    }
}
const sentNumber=isLGSeven(20)
console.log(sentNumber);


function  findingBadData(goodBad){
 
    const restNumber=[];
    for (let i =0; i<goodBad.length; i++){
        const element=goodBad[i];
        if(element<0){
            restNumber.push(element)
        }
    }
    return restNumber.length;
    
}
const getArray=[ 2, -5, -7, -13,-4];
const inputArray=findingBadData(getArray);
console.log(inputArray)




function  gemsToDiamond(value1,value2,value3){

    const friend1Germs=value1*21;
    const friend2Germs=value2*32;
    const friend3Germs=value3*43;

    const totalSum=friend1Germs+friend2Germs+friend3Germs;
    if(totalSum>2000){
        return totalSum-2000;
    }
    else {
        return totalSum;
    }
}
const setValue=gemsToDiamond(20, 200, 50);
console.log(setValue)