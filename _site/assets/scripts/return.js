"use strict";

export const returnIcon = document.getElementById('returnIcon');
export const returnLink = document.getElementById('returnLink');

returnIcon.addEventListener('mouseover', returnHover )
returnIcon.addEventListener('mouseout', returnHover )
returnIcon.addEventListener('mouseup', returnActive )
returnIcon.addEventListener('click', returnFocus )

returnLink.addEventListener('mouseover', returnHover )
returnLink.addEventListener('mouseout', returnHover )
returnLink.addEventListener('mouseup', returnActive )
returnLink.addEventListener('click', returnFocus )

export function returnHover() {
    returnLink.classList.toggle('return-hover');
}

export function returnActive() {
    returnLink.classList.toggle('return-active');
}

export function returnFocus() {
    returnLink.classList.add('return-focus');

}

//click
//mouseover
// mouseup
