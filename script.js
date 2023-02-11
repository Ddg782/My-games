let links = document.querySelectorAll("a");
let h1 = document.querySelector("h1");
function letterAnimation(text, element) {
    let letters = [];
    let index = 0;
    let id;
    function iteration() {
        letters.push(text[index]);
        element.innerHTML = letters.join("");
        index++;
        if (index == text.length) {
            clearInterval(id);
        }
    }
    id = setInterval(iteration, 100);
}

links.forEach(function (link) {
    let linkText = link.innerHTML;
    letterAnimation(linkText,link)
    setInterval(function () {
        letterAnimation(linkText, link);
    }, 3000);
});
letterAnimation(h1.innerHTML,h1)