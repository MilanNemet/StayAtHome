var sections;
var links;

window.onload = function () {

    sections = document.querySelectorAll("section");
    links = document.querySelectorAll("nav > a");

    initLinks(links, hideElement);
}

var initLinks = function (links, hide) {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", hide);
    }
}

var hideElement = function (event) {

    var elementId = event.target.id;
    var index = elementId[elementId.length - 1];

    for (var i = 0; i < sections.length; i++) {
        if (i+1 == index) {
            sections[i].style.display = "inline-block";
        }
        else {
            sections[i].style.display = "none";
        }
    }
}