"use strict";

const returnIcon = document.getElementById('returnIcon');
const returnLink = document.getElementById('returnLink');

returnIcon.addEventListener('mouseover', returnHover )
returnIcon.addEventListener('mouseout', returnHover )
returnIcon.addEventListener('mouseup', returnActive )
returnIcon.addEventListener('click', returnFocus )

returnLink.addEventListener('mouseover', returnHover )
returnLink.addEventListener('mouseout', returnHover )
returnLink.addEventListener('mouseup', returnActive )
returnLink.addEventListener('click', returnFocus )

function returnHover() {
    returnLink.classList.toggle('return-hover');
}

function returnActive() {
    returnLink.classList.toggle('return-active');
}

function returnFocus() {
    returnLink.classList.add('return-focus');

}

//click
//mouseover
// mouseup
