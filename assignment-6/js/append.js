const loadData= async() =>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    const res= await fetch(url);
    const data= await res.json();
    displayCard(data.data.tools)
}

const displayCard = data =>{
    // console.log(data)
    
    const cardContainer=document.getElementById('class-container')
    // display 6 card 
    const loadMore=document.getElementById('loadAll')
    if(data.length>6){
        data=data.slice(0,6)
        loadMore.classList.remove('hidden')
    }
    else{
        loadMore.classList.add('hidden')
    }
    // data=data.slice(0,6)
    // display all card
    data.forEach(cardData => {
        const createCard=document.createElement('div')
        createCard.classList.add=('col')
        createCard.innerHTML=`
            <div class="card p-3">
            <img src="${cardData.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${cardData.name}</h5>
            <p>1. Natural language processing</p>
            <p>2. Contextual understanding</p>
            <p>3. Text generation</p>
            </div>
            <hr>
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6>${cardData.name}</h6>
                    <p><span><i class="fa-solid fa-calendar-days"></i></span> ${cardData.published_in}</p>
                </div>
                <div class="d-flex justify-content-end align-items-center">
                     <span><i onclick="callData('${cardData.id}')"  class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></span>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(createCard)
    })
}
// display all card
const displayAll=async()=>{
    url=`https://openapi.programming-hero.com/api/ai/tools`
    const res=await fetch(url)
    const data=await res.json()
    displayCard(data.data.tools)
    const showAll =document.getElementById('loadAll')
    showAll.classList.add('d-none')
}

// for modal part 
const callData=id=>{
    let url=`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>showAllData(data.data))
    
}
const showAllData=_id=>{
    const modalContainer=document.getElementById('exampleModal')
    console.log(_id)
    const createModalDiv=document.createElement('div')
    createModalDiv.innerHTML=` `;
    modalContainer.appendChild(createModalDiv)
   
}


loadData()