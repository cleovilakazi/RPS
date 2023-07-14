function createRange(min, max) {
  let rand = Math.random() * (max - min) + min;
  return rand;
}

function chooseRandom(rps) {
  let rand = createRange(0, 2);
  let choice = rps[Math.round(rand)];
  return choice;
}

function compare(user, computer) {
  let winner;
  if (user === computer) {
    winner = "Draw";
    
  } else if (
    (computer === "ROCK" && user === "SCISSOR") ||
    (computer === "SCISSOR" && user === "PAPER") ||
    (computer === "PAPER" && user === "ROCK")
  ) {
    winner = "Computer Wins";
    
  } else {
    winner = "User Wins"; 
  }
  
  alert(winner);

  return winner;
}

function connect(choice) {
  let user;
  document.getElementById("rock").addEventListener("click", function () {
    user = "ROCK";
    document.getElementById("user").innerHTML =
      '<img src="images/rock.png"></img>';
      playerComputer(choice);
      compare(user,choice)     
  });
  document.getElementById("paper").addEventListener("click", function () {
    user = "PAPER";
    document.getElementById("user").innerHTML =
      '<img src="images/paper.png"></img>';
      playerComputer(choice);
      compare(user,choice)
  });
  document.getElementById("scissor").addEventListener("click", function () {
    user = "SCISSOR";
    document.getElementById("user").innerHTML =
      '<img src="images/scissor.png"></img>';
      playerComputer(choice);
      compare(user,choice)
  });
  
}

function playerComputer(choice) {
  if (choice === "ROCK") {
    document.getElementById("computer").innerHTML =
      '<img src="images/rock.png"></img>';
  } else if (choice === "PAPER") {
    document.getElementById("computer").innerHTML =
      '<img src="images/paper.png"></img>';
  } else if (choice === "SCISSORS") {
    document.getElementById("computer").innerHTML =
      '<img src="images/scissor.png"></img>';
  }
}

let rps = ["ROCK", "PAPER", "SCISSORS"];
let choice = chooseRandom(rps)
connect(choice);

