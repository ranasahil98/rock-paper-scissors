console.log("check if it is working");


let comp_score = 0;
let user_score = 0;

const user_score_span = document.querySelector(".user-score");
const comp_score_span = document.querySelector(".comp-score");
const result_p = document.querySelector(".result");
const wrapper_class = document.querySelector(".wrapper");
const r=document.getElementById("r");
const s=document.getElementById("s");
const p=document.getElementById("p");
const rc=document.getElementById("rc");
const sc=document.getElementById("sc");
const pc=document.getElementById("pc");
const choices = ['r','p','s']



  r.addEventListener("click", () =>{
    var ab ="r"+comp_choice();
    console.log(ab);
    removeClasses();
    game(ab);
  });
  p.addEventListener("click", () =>{      var ab ="p"+comp_choice();
    console.log(ab);
    game(ab);
  });
  s.addEventListener("click", () =>{    var ab ="s"+comp_choice();
    console.log(ab);
    game(ab);
  });



// Return Computer choice
function comp_choice(){
  return choices[Math.floor(Math.random() *3)];
}


function removeClasses(){
  r.classList.remove("win");
  s.classList.remove("win");
  p.classList.remove("win");
  r.classList.remove("lose");
  s.classList.remove("lose");
  p.classList.remove("lose");
  r.classList.remove("draw");
  s.classList.remove("draw");
  p.classList.remove("draw");

/*
  rc.classList.remove("win");
  sc.classList.remove("win");
  pc.classList.remove("win");
  rc.classList.remove("lose");
  sc.classList.remove("lose");
  pc.classList.remove("lose");
  rc.classList.remove("draw");
  sc.classList.remove("draw");
  pc.classList.remove("draw");
*/

  r.classList.remove("selected");
  s.classList.remove("selected");
  p.classList.remove("selected");

  rc.classList.remove("selected");
  sc.classList.remove("selected");
  pc.classList.remove("selected");



  wrapper_class.classList.remove("winWrapper");
  wrapper_class.classList.remove("loseWrapper");
wrapper_class.classList.remove("drawWrapper");
}

function userWinClass(){
  removeClasses();
  r.classList.add("win");
  p.classList.add("win");
  s.classList.add("win");
  wrapper_class.classList.add("winWrapper");
}

function userLostClass(){
  removeClasses();
  s.classList.add("lose");
  r.classList.add("lose");
  p.classList.add("lose");
  wrapper_class.classList.add("loseWrapper");
}

function userDrawClass(){
  removeClasses();
  p.classList.add("draw");
  r.classList.add("draw");
  s.classList.add("draw");
  wrapper_class.classList.add("drawWrapper");
}



function game (userInput){
//USER WINS

if(userInput === "rs" ){
    console.log("user wins.");
    user_score++;
    user_score_span.innerHTML=user_score;
    result_p.innerHTML="YOU WON !!";
    console.log(userInput);
    userWinClass();
    r.classList.add("selected");
    sc.classList.add("selected");
  }
if(userInput === "pr" ){
  removeClasses();
  console.log("user wins.");
  user_score++;
  user_score_span.innerHTML=user_score;
  result_p.innerHTML="YOU WON !!";
  console.log(userInput);
  userWinClass();
  p.classList.add("selected");
  rc.classList.add("selected");
  }
if(userInput === "sp" ){
  removeClasses();
  userWinClass();
  console.log("user wins.");
  user_score++;
  user_score_span.innerHTML=user_score;
  result_p.innerHTML="YOU WON !!";
  console.log(userInput);
  pc.classList.add("selected");
  s.classList.add("selected");
}

  //COMPUTER WINS

  if(userInput === "sr" ){
    removeClasses();
    console.log("Comp wins.");
    comp_score++;
    comp_score_span.innerHTML=comp_score;
    result_p.innerHTML="YOU Lost !!! !!";
    userLostClass();
    console.log(userInput);
    s.classList.add("selected");
    rc.classList.add("selected");
    }
  if(userInput === "rp" ){
    removeClasses();
    console.log("comp wins.");
    comp_score++;
    comp_score_span.innerHTML=comp_score;
    result_p.innerHTML="YOU Lost!! !!";
    console.log(userInput);
    userLostClass();
    r.classList.add("selected");
    pc.classList.add("selected");
    }
  if(userInput === "ps" ){
    removeClasses();
    console.log("comp wins.");
    comp_score++;
    comp_score_span.innerHTML=comp_score;
    result_p.innerHTML="YOU Lost!! !!";
    console.log(userInput);
    userLostClass();
    p.classList.add("selected");
    sc.classList.add("selected");
  }



//DRAW
    if(userInput === "pp" ){
      removeClasses();
      console.log("Draw");
      result_p.innerHTML="It was a Draw!";
      console.log(userInput);
      userDrawClass();
      p.classList.add("selected");
      pc.classList.add("selected");
      }

    if(userInput === "rr" ){
      removeClasses();
      console.log("Draw");
      result_p.innerHTML="It was a Draw!";
      console.log(userInput);
      userDrawClass();
      r.classList.add("selected");
      rc.classList.add("selected");
      }

    if(userInput === "ss" ){
      removeClasses();
      console.log("Draw");
      result_p.innerHTML="It was a Draw!";
      userDrawClass();
      s.classList.add("selected");
      sc.classList.add("selected");

    }

}
