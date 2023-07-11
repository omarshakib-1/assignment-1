const loadData2=async()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    const res=await fetch(url);
    const data=await res.json();
    displayData(data.data.tools)
}

const displayData=cards=>{
    const cardContainer=document.getElementById('card-container')
    // display 6 card in api data
    const loadMore=document.getElementById('loadAll')
    if(cards.length>6){
        cards=cards.slice(0,6)
        loadMore.classList.remove('hidden')
    }
    else{
        loadMore.classList.add('hidden')
    }
    // load all card in API
    cards.forEach(cardData =>{
        const cardDiv=document.createElement('div')
        cardDiv.innerHTML = `  <div class="card-body card w-full bg-base-100 shadow-xl ">
    <img class="h-52" src="${cardData.image}" alt="Shoes"/>
          <h2 class="card-title">Features</h2>
          <p>1. Natural language processing</p>
         <p>2. Contextual understanding</p>
         <p>3. Text generation</p>
         <hr>
         <div class="flex justify-between">
         <div>
             <h4 class='text-md font-semibold'>${cardData.name}</h4>
             <p><span><i class="fa-solid fa-calendar-days"></i></span> ${cardData.published_in}</p>
         </div>
         <div class='flex align-items-center'>
         <span class='bg-red-100 w-12 text-center text-red-400 h-12 p-3 rounded-full'><i onclick="callData('${cardData.id}')"  class="fa-solid fa-arrow-right"></i></span>
         </div>
     </div>
        `;
        cardContainer.appendChild(cardDiv)
    })
    
    
}
const callData=id=>{
    let url=`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(url))
}

loadData2();



