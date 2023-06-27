let check = document.getElementById("check");
let input = document.getElementById("input");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let start = document.getElementsByClassName("start");

output2.value = 0;

let guess = Math.floor((Math.random() * 10) + 1);

check.addEventListener("click", function() {
    if(isNaN(input.value)) {
        alert("Please enter a number");
    } else if(input.value == guess) {
        output2.value += 1;
        output1.innerHTML = "True!";
        output2.innerHTML = output2.value;
    } else {
        output1.innerHTML = "False!";
    }
    input.value = "";
    guess = Math.floor((Math.random() * 10) + 1);
});

