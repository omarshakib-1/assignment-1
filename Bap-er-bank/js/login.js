// step 1:control eventhandler 
document.getElementById('btn-submit').addEventListener('click',function(){
    const emailverify=document.getElementById('emailinput');
    const email=emailverify.value;
    // password input 
    const inputPass=document.getElementById('passwordinput');
    const password=inputPass.value;
//    step:4 verify email id & password 
    if(email === 'omarshakib1100@gmail.com' && password == 'shakib4567'){
        window.location.href ='bank.html'
    }
    else{
        alert('Sorry! invalid user')
    }
})


// document.getElementById('deposit-btn').addEventListener('click',function(){
//     const depositField=document.getElementById('deposit-feild');
//     const deposit=depositField.value;
//     console.log(typeof deposit)
//     // step 3
//     const totaldeposit=document.getElementById('total-deposit')
//     const totalDepositValue=totaldeposit.innerText;

//     const totalAmount=deposit+totalDepositValue;
//     totaldeposit.innerText=totalAmount;
//     // step blank 
//     depositField.value='';

// })