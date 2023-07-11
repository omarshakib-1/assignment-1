document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputDepositValue=document.getElementById('input-value').value;
    const depositInnerValue=document.getElementById('innerValue');
    const depositStringValue=depositInnerValue.innerText
    const totalDeposit=parseFloat(inputDepositValue)+parseFloat(depositStringValue);
    depositInnerValue.innerText=totalDeposit

    const balanceVlaue=document.getElementById('balance')
    const balanceStringValue=balanceVlaue.innerText;
    const totalBalance=parseFloat(inputDepositValue)+parseFloat(balanceStringValue)
    balanceVlaue.innerText=totalBalance;
})