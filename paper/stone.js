let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const mess=document.querySelector("#msg");
const userscoredoc=document.querySelector("#user-score");
const compscoredoc=document.querySelector("#comp-score");


const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const ranid=Math.floor(Math.random()*3);
    return options[ranid];
}
const drawgame=()=>{
    console.log("game was draw");
    mess.innerText="the game was draw. play again";
    mess.computedStyleMap,backgroundcolor="red";
}
showwinner=(userwin,userchoice,compchoice)=>{
if(userwin==="true"){
    userscore++;
    userscoredoc.innerText=userscore;
    console.log("you won");
    mess.innerText=`you won your ${userchoice} beats ${compchoice}`;

    // mess.computedStyleMap,backgroundcolor="green";
}
else{
    console.log("loose");
    compscore++;
    compscoredoc.innerText=compscore;
    mess.innerText=`you loss. ${compchoice} beats your ${userchoice}`;
    mess.computedStyleMap,backgroundcolor="blue";
}
}
const playgame=(userchoice)=>{
    console.log("userchoice",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice",compchoice);
    if(userchoice === compchoice){
drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?"false":"true";
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?"false":"true"
        }
        else{
            userwin=compchoice==="paper"?"true":"false";
        }
        showwinner(userwin,userchoice,compchoice);
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
console.log("user chopice :",userchoice);
playgame(userchoice);
    })
});

//Math.floor(Math.random()*10) for 0 to 9 whole no //for 0 to2 multiply with 3