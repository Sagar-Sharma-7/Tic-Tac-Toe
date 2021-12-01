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
const turn_box = document.querySelector(".turn");
const start_btn = document.querySelector("#start_btn");
const p_again = document.querySelector("#p_again");


const n1 = prompt("Name of player 1: ");
const n2 = prompt("Name of player 2: ");

// start game
start_btn.addEventListener("click", () => {
    start_btn.style.display = "none";
    p_again.style.display = "block";
     
    // first turn
    const n = Math.floor(Math.random() *2);
             if(n == 0){
                turn_box.innerHTML = `It's ${n1}'s Turn.`
            }else{
                turn_box.innerHTML = `It's ${n2}'s Turn.`
            };

let flag = 1;
    //  enabling click
     boxes.forEach((box) => {
         box.addEventListener("click", () => {

             if(flag == 1){
                 box.innerHTML = "X";
                 box.disabled = true;
                 flag = 0;
                 if(n == 1){
                    turn_box.innerHTML = `It's ${n1}'s Turn.`
                }else{
                    turn_box.innerHTML = `It's ${n2}'s Turn.`
                };
             }else{
                 box.innerHTML = "0";
                 box.disabled = true;
                 flag = 1;
                 if(n == 0){
                    turn_box.innerHTML = `It's ${n1}'s Turn.`
                }else{
                    turn_box.innerHTML = `It's ${n2}'s Turn.`
                };
             };
         });
     });
});


// play again
p_again.addEventListener("click", () => {
    let i=0;
    boxes.forEach((box) => {
        box.innerHTML = "";
        turn_box.innerHTML = "";   
        while(i < 9){
                boxes[i].disabled = false;
                console.log(i);
                i++;
        }
    });
});



