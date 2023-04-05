const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const reset = document.querySelector('.reset')
const score = document.querySelector('h3')
const title = document.querySelector('.title')
let p1Score = 0
let p2Score = 0

console.log(score)

p1.addEventListener('click', function () {
    p1Score += 1
    score.innerText = `${p1Score}-${p2Score}`
    if (p1Score === 5) {
        title.innerText = 'Player 1 Won!'
        p1.disabled = true
        p2.disabled = true
    }
})

p2.addEventListener('click', function () {
    p2Score += 1
    score.innerText = `${p1Score}-${p2Score}`
    if (p2Score === 5) {
        title.innerText = 'Player 2 Won!'
        p1.disabled = true
        p2.disabled = true
    }
})

reset.addEventListener('click', function () {
    p1.disabled = false
    p2.disabled = false
    score.innerText = '0-0'
    p1Score = 0
    p2Score = 0
    title.innerText = "Let's Play!"
})

// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

"use strict"; 

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});
