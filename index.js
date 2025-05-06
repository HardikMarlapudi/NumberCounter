let number = 0;

document.getElementById("decrease-btn").onclick = function() {
    number--;
    document.getElementById("number").innerHTML = number;
};

document.getElementById("btn-zero").onclick = function() {
    number = 0;
    document.getElementById("number").innerHTML = number;
};

document.getElementById("increase-btn").onclick = function() {
    number++;
    document.getElementById("number").innerHTML = number;
};
