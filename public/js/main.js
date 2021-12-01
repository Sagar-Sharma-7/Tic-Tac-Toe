const boxes = document.querySelectorAll(".box");



const turn_box = document.querySelector(".turn");
const start_btn = document.querySelector("#start_btn");
const p_again = document.querySelector("#p_again");


const n1 = prompt("Name of player 1: ");
const n2 = prompt("Name of player 2: ");



// winning function
const win = (x,y,z) => {
    let k = 0;
    while(k < 8){
        boxes[k].style.color = `#555555`;
        boxes[k].disabled = true;
        k = k+1;
    }
    x.style.color = `#56F85B`;
    y.style.color = `#56F85B`;
    z.style.color = `#56F85B`;
    $(".turn").slideUp();
}

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
                     win(boxes[0], boxes[1], boxes[2]);
                 }else if(b1 == "X" && b2 == "X" && b3 == "X"){
                    win(boxes[3], boxes[4], boxes[5]);
                 }else if(c1 == "X" && c2 == "X" && c3 == "X"){
                    win(boxes[6], boxes[7], boxes[8]);
                 }else if(a1 == "X" && b1 == "X" && c1 == "X"){
                    win(boxes[0], boxes[3], boxes[6]);
                 }else if(a2 == "X" && b2 == "X" && c2 == "X"){
                    win(boxes[1], boxes[4], boxes[7]);
                }else if(a3 == "X" && b3 == "X" && c3 == "X"){
                    win(boxes[2], boxes[5], boxes[8]);
                }else if(a1 == "X" && b2 == "X" && c3 == "X"){
                    win(boxes[0], boxes[4], boxes[8]);
                }else if(a3 == "X" && b2 == "X" && c1 == "X"){
                    win(boxes[2], boxes[4], boxes[6]);
                };


                 box.disabled = true;
                 

                 flag = 0;
                  if(n == 1){
                     turn_box.innerHTML = `It's ${n1}'s Turn.`
                 }else{
                     turn_box.innerHTML = `It's ${n2}'s Turn.`
                 };
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
                    win(boxes[0], boxes[1], boxes[2]);
                }else if(b1 == "0" && b2 == "0" && b3 == "0"){
                   win(boxes[3], boxes[4], boxes[5]);
                }else if(c1 == "0" && c2 == "0" && c3 == "0"){
                   win(boxes[6], boxes[7], boxes[8]);
                }else if(a1 == "0" && b1 == "0" && c1 == "0"){
                   win(boxes[0], boxes[3], boxes[6]);
                }else if(a2 == "0" && b2 == "0" && c2 == "0"){
                   win(boxes[1], boxes[4], boxes[7]);
               }else if(a3 == "0" && b3 == "0" && c3 == "0"){
                   win(boxes[2], boxes[5], boxes[8]);
               }else if(a1 == "0" && b2 == "0" && c3 == "0"){
                   win(boxes[0], boxes[4], boxes[8]);
               }else if(a3 == "0" && b2 == "0" && c1 == "0"){
                   win(boxes[2], boxes[4], boxes[6]);
               };

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
    $(".turn").slideDown();
    let i=0;
    boxes.forEach((box) => {
        box.innerHTML = "";   
        while(i < 9){
                boxes[i].disabled = false;
                boxes[i].style.color = `#fff`
                console.log(i);
                i++;
        }
    });
});





