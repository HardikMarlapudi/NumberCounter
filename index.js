let number = 0;

document.getElementById("decrease-btn").addEventListener("click", function() {
    number--;
    document.getElementById("number").innerHTML = number;
});

document.getElementById("btn-zero").addEventListener("click", function() {
    number = 0;
    document.getElementById("number").innerHTML = number;
});

document.getElementById("increase-btn").addEventListener("click", function() {
    number++;
    document.getElementById("number").innerHTML = number;
});
