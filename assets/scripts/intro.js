"use strict";

const abtLink1 = document.getElementById('abtLink1');
const abtLink2 = document.getElementById('abtLink2');
const intro1 = document.getElementById('intro1');
const intro2 = document.getElementById('intro2');
 
abtLink1.addEventListener('mouseover', twinkle );
abtLink1.addEventListener('mouseout', twinkle );

abtLink2.addEventListener('mouseover', twinkle );
abtLink2.addEventListener('mouseout', twinkle );

function twinkle() {
    intro1.classList.toggle('intro-1-hover');
    intro2.classList.toggle('intro-2-hover')
}

