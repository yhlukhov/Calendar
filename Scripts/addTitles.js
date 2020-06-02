const randomizer = (min, max) => {return Math.floor(Math.random() * (max - min + 1) + min)}

// Add titles:
let elms = document.getElementsByTagName('h1')
for (let e of elms) {
    let titleText = e.innerText
    let newHtml = ""
    for (let ltr of titleText) {
        if (ltr == ' ') ltr = '&nbsp;'
        newHtml += `<div>${ltr}</div>`
    }
    e.innerHTML = newHtml
}

// Styling on hover/unhover
const transform = (event) => {
    let rand = [Math.ceil(Math.random()*20)-10, Math.ceil(Math.random()*20)-10];
    event.srcElement.style.transform = `scale(1.3) skew(${rand[0]}deg, ${rand[1]}deg)`;
    event.srcElement.style.paddingLeft = '4px';
    event.srcElement.style.paddingRight = '4px';
    event.srcElement.style.cursor = 'pointer';

}
const unTransform = (event) => {
    event.srcElement.style.transform = ``;
    event.srcElement.style.paddingLeft = '';
    event.srcElement.style.paddingRight = '';
}

// Change color on click
const changeColor = (event) => {
    let color = {'r': randomizer(30, 255), 'g': randomizer(30, 255), 'b': randomizer(30, 255)}
    event.srcElement.style.color = `rgb(${color.r}, ${color.g}, ${color.b})`
}

//Apply on titles elements
const titles = document.getElementsByTagName('h1');
for (let el of titles) {
    let title = el.getElementsByTagName('div');
    for (let char of title) {
        char.onmouseover = transform;
        char.onclick = changeColor;
        char.onmouseout = unTransform;
    }
}