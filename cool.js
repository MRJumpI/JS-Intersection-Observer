const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(e => {
    e.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting);
        //if you want to remove them once they appear on page 
        //if (e.isIntersecting) observer.unobserve( .target);
    })
},{
    threshold:1,  // if the card on which we are doing animation is 100% hide or show on screen then show class is active or deactive
    //rootMargin:"100px", // it define who the animation container box will act  if it is 100px from current one then remove the class else no.
    //root:'card-container', // parent container it is Body by default .. if you want any other add scroll in it
})

const lastCardObserver = new IntersectionObserver(enteries =>{
    const lastCard = enteries[0]
    if(!lastCard.isIntersecting) return
    loadNewCards()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector(".card:last-child"))
},{
    rootMargin:'100px'
})

lastCardObserver.observe(document.querySelector(".card:last-child"))

cards.forEach(card =>{
    observer.observe(card);
})

const cardContainer = document.querySelector(".card-container")
function loadNewCards(){
    const card = document.createElement("div")
    card.textContent="New Card"
    card.classList.add("card")
    observer.observe(card)
    cardContainer.append(card)
}