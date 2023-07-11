document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
    const chocoletQuantity=document.getElementById('kitkat-quantity').value;
    const chocoletCost=chocoletQuantity*200;
    // const chocoletTotalPrice=document.getElementById('chocolate').innerText=chocoletCost;
    setElement('chocolate',chocoletCost)
})
// for rose total cost 
document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const roseQuantity=document.getElementById('rose-quantity').value;
    const roseCost=roseQuantity*100;
    setElement('rose',roseCost)
})

// for dairy total cost 
document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const dairyQuantity=document.getElementById('diary-quantity').value;
    const dairyCost=dairyQuantity*100;
    setElement('diary',dairyCost)
})


function setElement(id , value){
    document.getElementById(id).innerText=value;
}
