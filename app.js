let boxes=document.querySelectorAll(".box");
let newBtn=document.querySelector("#newgamebtn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let turnO=true;
let drawStatus;

const winner=[
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
    box.addEventListener("click",()=>{
    if(turnO)
    {
        box.innerText="O";
        turnO=false;
    }
    else
    {
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
});
    });
    let checkWinner = () => {
        let draw = true;
    
        for (let patterns of winner) {
            let pos1 = boxes[patterns[0]].innerText;
            let pos2 = boxes[patterns[1]].innerText;
            let pos3 = boxes[patterns[2]].innerText;
    
            if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    for (let box of boxes) {
                        box.disabled = true;
                    }
                    showWinner(pos1);
                    return;
                }
            } else {
                draw = false;
            }
        }
        if (draw) {
            for (let box of boxes) {
                box.disabled = true;
            }
            drawn();
        }
    }
    
    let drawn = () => {
        msg.innerText = "It's a draw! Please try again.";
        msgContainer.classList.remove("hide");
    }
let showWinner=(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

newBtn.addEventListener("click",()=>{
         
    for(let box of boxes)
    {
        box.innerText="";
        box.disabled=false;
    }
    msgContainer.classList.add("hide");
});