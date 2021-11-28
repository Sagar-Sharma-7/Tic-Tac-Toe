const boxes = document.querySelectorAll(".box");

const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const c3 = document.querySelector("#c3");

const start_btn = document.querySelector("#start_btn");
const p_again = document.querySelector("#p_again");


// start game
start_btn.addEventListener("click", () => {
    start_btn.style.display = "none";
    p_again.style.display = "block";

    // enabling click
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.innerHTML == ""){
                box.innerHTML = "X"
            }
        });
    });
});



// play again
p_again.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
    });
});



