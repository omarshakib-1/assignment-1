// step1:1st thing to setup Click handler (addEventListener)
document.getElementById('deposit-btn').addEventListener('click',function(){
    
    // step2:get input amount 
    const depositField=document.getElementById('deposit-field')
    const depositStringValue=depositField.value;
    const depositValue=parseFloat(depositStringValue)
    // step blank 
    depositField.value='';

    if(isNaN(depositValue)){
        alert('Provide a valid Number')
        return;
    }
   
    // step3:send the value in deposit box 
    const depositBox=document.getElementById('total-deposit')
    const currentDepositTotalString=depositBox.innerText;
    const currentDepositBalance=parseFloat(currentDepositTotalString)
    
    // step4:sum balance 
    const totalAmount=depositValue+currentDepositBalance;
    depositBox.innerText=totalAmount;
    // step5:initial balance provide
    const balanceTotal=document.getElementById('totalBalance');
    const totalBalanceStringValue=balanceTotal.innerText;
    const totalBalance=parseFloat(totalBalanceStringValue)
    // step6:sum total value with current deposit value 
    const totalSumBalance=totalBalance+depositValue;
    // set the balance in totalBalance section 
    balanceTotal.innerText=totalSumBalance
})