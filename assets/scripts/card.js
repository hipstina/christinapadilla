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



    cardBtn = Array.from(cardBtn);
    cardBtn.forEach(e => e.addEventListener("mouseover", function(e) {

       for (let i in e.target.classList) {
        if (e.target.classList[i] == "card-btn") {
            let cardOverlay = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.lastElementChild;
            cardOverlayHover(cardOverlay);

            let cardImgWrapper = e.target.parentElement.parentElement.previousElementSibling.firstElementChild;
            cardBackgroundHover(cardImgWrapper)

            let cardImg = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
            imgTilt(cardImg);
        }
    }}));

    cardBtn.forEach(e => e.addEventListener("mouseout", function(e) {

        for (let i in e.target.classList) {
         if (e.target.classList[i] == "card-btn") {

            let cardOverlay = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.lastElementChild;
            cardUnhover(cardOverlay);

            let cardImgWrapper = e.target.parentElement.parentElement.previousElementSibling.firstElementChild;
            cardBackgroundUnhover(cardImgWrapper)
            
            let cardImg = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
            imgUntilt(cardImg);
         }
     }}));




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




