

function mindGame(){
    const inputNumber=33;
    const multiplication=inputNumber*3;
    const add=multiplication+10;
    const divide=add/2;
    const minus=divide-5;

    return minus;
}
const forReturn= mindGame('nan');
console.log(forReturn)



function evenOdd(){


    const inputName='habib';

    if(inputName.length%2 == 0){
       return 'Even';
    }
    else{
        return 'Odd';
    }
}
const forreTurn= evenOdd('NAN');
console.log(forreTurn);



function isLGSeven(){
    const thinkNumber=-15;
    if (thinkNumber>7){
        const multiplication=thinkNumber*2;
        console.log(multiplication)
    }
    else if(thinkNumber<7){
        const miniusNumber=thinkNumber-7;
        console.log(miniusNumber)
    }
}
isLGSeven();





function findingBadData(){
    const inputArray=[10,21,-12,15,-17,-10,12,16]
    const sent=[];
    for (let i =0; i<inputArray.length; i++){
        const element=inputArray[i];
        if(element<0){
           sent.push(element);
        }
        else if(element>=7){
            console.log('good data')
        }
        else{
            console.log(element)
        }
    }
    return sent.length;
}
findingBadData();


// function  gemsToDiamond(value1,value2,value3){
//     const friend1Germs=value1*21;
//     const friend2Germs=value2*32;
//     const friend3Germs=value3*43;

//     const totalSum=friend1Germs+friend2Germs+friend3Germs;
//     if(totalSum>2000){
//         return totalSum-2000;
//     }
//     else {
//         return totalSum;
//     }
// }
// const setValue=gemsToDiamond(20,200,50);
// console.log(setValue)