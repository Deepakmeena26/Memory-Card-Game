const cards=document.querySelectorAll(".card");

let cardone,cardtwo;
let disable=false;
let match=0;

function matchcard(img1,img2){
    if(img1===img2){
        match++;
        if(match==8){
            setTimeout(()=>{
                return shuffle();
            },1000);
        }
        cardone.removeEventListener("click",flipcard);
        cardtwo.removeEventListener("click",flipcard);
        cardone=cardtwo="";
        return disable=false;
    }
    setTimeout(()=>{
        cardone.classList.add("shake");
        cardtwo.classList.add("shake");
    },400);
    setTimeout(()=>{
        cardone.classList.remove("shake","flip");
        cardtwo.classList.remove("shake","flip");
        cardone=cardtwo="";
        disable=false;
    },1200);
}

function flipcard(e){
    let clickcard=e.target;
    if(clickcard!==cardone && !disable){
        clickcard.classList.add("flip");
        if(!cardone){
            return cardone=clickcard;
        }
        cardtwo=clickcard;
        disable=true;
        let cardoneimg=cardone.querySelector("img").src,
        cardtwoimg=cardtwo.querySelector("img").src;
        matchcard(cardoneimg,cardtwoimg);
    }
}

function shuffle(){
    match=0;
    cardone=cardtwo="";
    disable=false;
    let arr=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr.sort(()=>Math.random()>0.5?1:-1);
    cards.forEach((card,index)=>{
        card.classList.remove("flip");
        let imgtag=card.querySelector("img");
        imgtag.src=`img-${arr[index]}.png`;
        card.addEventListener("click",flipcard);
    })
}

shuffle();

cards.forEach(card=>{
    card.addEventListener("click",flipcard);
})