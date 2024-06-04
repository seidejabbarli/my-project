let firstContainer = document.querySelector(".first-container");
let container = document.querySelector(".container");
let firstStarBtn = document.querySelector(".start-game");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let lotos = document.querySelector(".lotos");
let arr = [];
let startBtnClick = false;

firstStarBtn.onclick = function(){
       firstContainer.style.display = "none"
       container.style.display = "block"
}

startBtn.onclick = function(){
    if(startBtnClick == false){
        var x = setInterval(function(){
            var index = Math.floor(Math.random()*100);
            if(arr.includes(index) == false){
                 let div = document.createElement("div");
                 div.setAttribute("class","loto")
                 div.innerText = index;
                 lotos.append(div);
                 arr.push(index);
            }
          },1000);

          startBtnClick = true;
           
          stopBtn.onclick= function(){
              if(startBtnClick == true){
                  clearInterval(x);
                  startBtnClick = false;
                  console.log(startBtnClick);
              }
          }
      
          resetBtn.onclick = function(){
              lotos.innerText = "";
              clearInterval(x);
              arr = [];
              startBtnClick = false;
              
          }
        
    }
    
}
