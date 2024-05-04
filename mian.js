let btn = document.querySelector(".btn");
let items = document.querySelectorAll(".item");

function randomColor() {
    return Math.floor(Math.random() * 256)
}

let str = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
let str2 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
let str3 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`

btn.addEventListener('click', function () {
    for (let i = 0; i < items.length; i++) {
        let str = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`

        items[i].style.background = str
        items[i].innerHTML = str
    }
})

function copyText(clickdSpan) {
    var spanText = clickdSpan.innerText;
    var tempInput = document.createElement('input');
    tempInput.value = spanText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand(clickdSpan.innerText);
    document.execCommand('copy', true, null);
    document.body.removeChild(tempInput);
    alert('Rangni nusxa oldingiz: ' + spanText);
}
