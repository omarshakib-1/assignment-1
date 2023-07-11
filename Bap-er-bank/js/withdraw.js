// step1: for withdraw balance first you must have to click withdraw button 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    // step2:get the inputBalance amount from the withdraw area 
    const withDrawField=document.getElementById('withdrawField')
    const withdrawStringAmount=withDrawField.value;
    const withdrawAmount=parseFloat(withdrawStringAmount)
    // setup input field after withdraw 
    withDrawField.value='';
    if(isNaN(withdrawAmount)){
        alert('Please Provide a Valid Number')
        return;
    }
    
    // step3:send the amount which is withdraw from your bank account 
    const withBalance=document.getElementById('withdraw-total');
    const previousStringValue=withBalance.innerText;
    const previousValue=parseFloat(previousStringValue)
    
    
    // step5:minus the withdraw amount form your total balance 
    const balanceTotal=document.getElementById('totalBalance');
    const totalBalanceStringValue=balanceTotal.innerText;
    const totalBalance=parseFloat(totalBalanceStringValue)
    
    if(withdrawAmount > totalBalance){
        alert('sorry,Your account doesn’t have enough money')
        return;
    }
    // step4:sum total withdraw Balance 
    const totalWithdraw=previousValue+withdrawAmount;
    withBalance.innerText=totalWithdraw;

    // step6:cut the withdraw balance 
    const afterWithdrawBalance=totalBalance-withdrawAmount;
    balanceTotal.innerText=afterWithdrawBalance;

    

})