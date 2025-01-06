let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let turnO = true ;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click" , function (){
        if (turnO == true){
            box.innerText = "O"
            turnO = false ;
        }else{
            box.innerText = "X"
            turnO = true ;
        }
        box.disabled = true ;

        checkWinner();
    });
});

const checkWinner = () =>{
    for (let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // Checking Winner pattern

            if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
                if (pos1Val == pos2Val && pos2Val == pos3Val){
                    console.log("Winner Decided" , pos3Val);
            } else {
                console.log ("Pattern is not matched");
            }
        }
    }
}