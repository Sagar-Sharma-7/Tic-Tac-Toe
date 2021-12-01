const boxes = document.querySelectorAll(".box");


const turn_box = document.querySelector(".turn");
const start_btn = document.querySelector("#start_btn");
const p_again = document.querySelector("#p_again");


// const n1 = prompt("Name of player 1: ");
// const n2 = prompt("Name of player 2: ");

// start game
start_btn.addEventListener("click", () => {
    start_btn.style.display = "none";
    p_again.style.display = "block";
     
    // first turn
    // const n = Math.floor(Math.random() *2);
    //          if(n == 0){
    //             turn_box.innerHTML = `It's ${n1}'s Turn.`
    //         }else{
    //             turn_box.innerHTML = `It's ${n2}'s Turn.`
    //         };

let flag = 1;
    //  enabling click
     boxes.forEach((box) => {
         box.addEventListener("click", () => {
             turn_box.innerHTML = "Player1"
            
             if(flag == 1){
                 box.innerHTML = "X";
                 let a1 = document.querySelector("#a1").innerHTML;
                 let a2 = document.querySelector("#a2").innerHTML;
                 let a3 = document.querySelector("#a3").innerHTML;
                 let b1 = document.querySelector("#b1").innerHTML;
                 let b2 = document.querySelector("#b2").innerHTML;
                 let b3 = document.querySelector("#b3").innerHTML;
                 let c1 = document.querySelector("#c1").innerHTML;
                 let c2 = document.querySelector("#c2").innerHTML;
                 let c3 = document.querySelector("#c3").innerHTML;

                 // check
                 if(a1 == "X" && a2 == "X" && a3 == "X"){
                     console.log(" X wins");
                 }else if(b1 == "X" && b2 == "X" && b3 == "X"){
                     console.log("X wins");
                 }else if(c1 == "X" && c2 == "X" && c3 == "X"){
                     console.log("X wins");
                 }else if(a1 == "X" && b1 == "X" && c1 == "X"){
                     console.log("X wins");
                 }else if(a2 == "X" && b2 == "X" && c2 == "X"){
                    console.log("X wins");
                }else if(a3 == "X" && b3 == "X" && c3 == "X"){
                    console.log("X wins");
                }


                 box.disabled = true;
                 

                 flag = 0;
                //  if(n == 1){
                //     turn_box.innerHTML = `It's ${n1}'s Turn.`
                // }else{
                //     turn_box.innerHTML = `It's ${n2}'s Turn.`
                // };
                turn_box.innerHTML = "Player2"
             }else{
                 box.innerHTML = "0";

                 let a1 = document.querySelector("#a1").innerHTML;
                 let a2 = document.querySelector("#a2").innerHTML;
                 let a3 = document.querySelector("#a3").innerHTML;
                 let b1 = document.querySelector("#b1").innerHTML;
                 let b2 = document.querySelector("#b2").innerHTML;
                 let b3 = document.querySelector("#b3").innerHTML;
                 let c1 = document.querySelector("#c1").innerHTML;
                 let c2 = document.querySelector("#c2").innerHTML;
                 let c3 = document.querySelector("#c3").innerHTML;

                 // check
                 if(a1 == "0" && a2 == "0" && a3 == "0"){
                     console.log(" 0 wins");
                 }else if(b1 == "0" && b2 == "0" && b3 == "0"){
                     console.log("0 wins");
                 }else if(c1 == "0" && c2 == "0" && c3 == "0"){
                     console.log("0 wins");
                 }else if(a1 == "0" && b1 == "0" && c1 == "0"){
                     console.log("0 wins");
                 }else if(a2 == "0" && b2 == "0" && c2 == "0"){
                    console.log("0 wins");
                }else if(a3 == "0" && b3 == "0" && c3 == "0"){
                    console.log("0 wins");
                }else if(a1 == "0" && b2 == "0" && c3 == "0"){
                    console.log("0 wins");
                }else if(a3 == "0" && b2 == "0" && c1 == "0"){
                    console.log("0 wins");
                };

                 box.disabled = true;
                 flag = 1;
                //  if(n == 0){
                //     turn_box.innerHTML = `It's ${n1}'s Turn.`
                // }else{
                //     turn_box.innerHTML = `It's ${n2}'s Turn.`
                // };
                turn_box.innerHTML = "Player1"
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



