var currentlyVisibleElement = "";

function switchContent() {

    document.getElementById("courseTitle1").hidden = true;
    document.getElementById("courseTitle2").hidden = true;

    document.getElementById("lab1_article").hidden = true;
    document.getElementById("lab2_article").hidden = true;
    document.getElementById("lab3_article").hidden = true;

    document.getElementById("export").hidden = false;

    document.getElementById("content").style = "border-left: 1px solid; width: calc(67%  - 1px);";
}


window.onload = function () {

    document.getElementById("lab1_link").onclick = function () {
        switchContent();
        currentlyVisibleElement = "lab1_article";
        document.getElementById("lab1_article").hidden = false;
    };

    document.getElementById("lab2_link").onclick = function () {
        switchContent();
        currentlyVisibleElement = "lab2_article";
        document.getElementById("lab2_article").hidden = false;
    };

    document.getElementById("lab3_link").onclick = function () {
        switchContent();
        currentlyVisibleElement = "lab3_article";
        document.getElementById("lab3_article").hidden = false;
    };

    document.getElementById("export").onclick = function () {
        alert(document.getElementById(currentlyVisibleElement).childNodes[3].innerText);
    };

};