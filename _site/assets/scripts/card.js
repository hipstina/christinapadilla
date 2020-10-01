"use strict";

let cardWrapper = document.getElementsByClassName('card-img-wrapper');
let cardOverlay = document.getElementsByClassName('card-img-overlay');
let cardTitle = document.getElementsByClassName('card-title');
let cardBtn = document.getElementsByClassName('card-btn');

cardOverlay = Array.from(cardOverlay);
cardOverlay.forEach(e => e.addEventListener("mouseover", function(e) {

        for (let i in e.target.classList) {
         if (e.target.classList[i] == "card-img-overlay") {
  
            let cardOverlay = e.target;
            cardOverlayHover(cardOverlay);

            let cardImgWrapper = e.target.parentElement;
            cardBackgroundHover(cardImgWrapper);

            let cardImg = e.target.previousElementSibling;
            imgTilt(cardImg);
         }
 
     }}));

     cardOverlay.forEach(e => e.addEventListener("mouseout", function(e) {

        for (let i in e.target.classList) {
         if (e.target.classList[i] == "card-img-overlay") {

            let cardOverlay = e.target;
            cardUnhover(cardOverlay);

            let cardImgWrapper = e.target.parentElement;
            cardBackgroundUnhover(cardImgWrapper);


            let cardImg = e.target.previousElementSibling;
            imgUntilt(cardImg);
         }
        }}));


    // console.log(Array.from(cardBtn))
    // cardWrapper = Array.from(cardWrapper);
    // cardWrapper.forEach(e => e.addEventListener("mouseover", function(e) {

    //     for (let i in e.target.classList) {
    //      if (e.target.classList[i] == "card-img-wrapper") {

    //         let cardOverlay = e.target.lastElementChild;
    //         cardOverlayHover(cardOverlay);

    //         let cardImgWrapper = e.target;
    //         cardBackgroundHover(cardImgWrapper);

    //         let cardImg = e.target.firstElementChild;
    //         imgTilt(cardImg);
    //      }
 
    //  }}));

    //  cardWrapper.forEach(e => e.addEventListener("mouseout", function(e) {

    //     for (let i in e.target.classList) {
    //      if (e.target.classList[i] == "card-img-wrapper") {
    //         console.log(e.target.classList[i]); 
        
    //         let cardOverlay = e.target.lastElementChild;
    //         cardUnhover(cardOverlay);

    //         let cardImgWrapper = e.target;
    //         cardBackgroundUnhover(cardImgWrapper);

    //         let cardImg = e.target.firstElementChild;
    //         imgUntilt(cardImg);
    //      }
 
    //  }}));


    cardBtn = Array.from(cardBtn);
    cardBtn.forEach(e => e.addEventListener("mouseover", function(e) {

       for (let i in e.target.classList) {
        if (e.target.classList[i] == "card-btn") {
            let cardOverlay = e.target.parentElement.parentElement.parentElement.firstElementChild.lastElementChild;
            cardOverlayHover(cardOverlay);

            let cardImgWrapper = e.target.parentElement.parentElement.parentElement.firstElementChild;
            cardBackgroundHover(cardImgWrapper)

            let cardImg = e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
            imgTilt(cardImg);
        }
    }}));

    cardBtn.forEach(e => e.addEventListener("mouseout", function(e) {

        for (let i in e.target.classList) {
         if (e.target.classList[i] == "card-btn") {

            let cardOverlay = e.target.parentElement.parentElement.parentElement.firstElementChild.lastElementChild;
            cardUnhover(cardOverlay);

            let cardImgWrapper = e.target.parentElement.parentElement.parentElement.firstElementChild;
            cardBackgroundUnhover(cardImgWrapper)
            
            let cardImg = e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
            imgUntilt(cardImg);
         }
     }}));
        // else if (e.target.classList[i] == "card-title") {
        //     cardHover(e);

        // } else if (e.target.classList[i] == "card-img-overlay") {
        //     cardHover(e);
            
        // } else if (e.target.classList[i] == "card-img-wrapper") {
        //     cardHover(e);
            
        // }
    //    }



function cardOverlayHover(cardOverlay) {
    cardOverlay.classList.add('card-img-overlay-hover') 
}

function cardBackgroundHover(cardImgWrapper) {
    cardImgWrapper.classList.add('card-img-hover')
}

function imgTilt(cardImg) {  
    cardImg.classList.add('card-rotate-hover')
}

function imgUntilt(cardImg) {

    cardImg.classList.remove('card-rotate-hover')
}

function cardUnhover(cardOverlay) {
    cardOverlay.classList.remove('card-img-overlay-hover');
}

function cardBackgroundUnhover(cardImgWrapper) {
    cardImgWrapper.classList.remove('card-img-hover')
}




// https://stackoverflow.com/questions/25130798/check-if-current-element-is-even-or-odd
function evenOrOdd (e) {
    console.log(e.target.parentElement.parentElement.parentElement.parentElement);

    let currentCard = e.target.parentElement.parentElement.parentElement;

    let odd;

    let cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var parent = card.parentNode;
        var child = parent.firstChild;
        var index = 0;

    while (true) {
        if (child.nodeType === Node.ELEMENT_NODE) {
           index++;
        }
  
        if (child === card || !child.nextSibling) {
           break;
        }
  
        child = child.nextSibling;
     }
  
     if (index % 2 == 0) {
        if (card == currentCard) {
            console.log("even");
            odd = 'false';
            return imgTiltEven(e);
        }
     } else {
        if (card == currentCard) {
            console.log("odd")
            odd = 'true';
            return imgTiltOdd(e);
        }
     }
    }
    
}
