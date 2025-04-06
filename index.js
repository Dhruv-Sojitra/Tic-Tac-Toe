let allbtn = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbt = document.querySelector("#New");
let msg = document.querySelector("#msg");
let msg1 = document.querySelector(".msg1");
let turnO = true;
let count = 0;

const winptt = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetgame = () => {
  turnO = true;
  enablebtn();
  msg1.classList.add("hide");
  count = 0;
};

allbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO === true) {
      btn.innerText = "O";
      btn.style.color = "blue";
      turnO = false;
    } else {
      btn.innerText = "X";
      btn.style.color = "red";
      turnO = true;
    }
    btn.disabled = true;
    count++;
    let winner = checkwinner();

    if (count === 9 && !winner) {
      msg.innerText = `Game is Draw!!`;
      msg1.classList.remove("hide");
    }
  });
});

const disbtn = () => {
  for (btn of allbtn) {
    btn.disabled = true;
  }
};

const enablebtn = () => {
  for (btn of allbtn) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

function showwinner(winner) {
  msg.innerHTML = `Congrats!! <b><u>${winner}</u></b> is a Winnner..!`;
  msg1.classList.remove("hide");
  disbtn();
}
function checkwinner() {
  for (pattern of winptt) {
    let p1 = allbtn[pattern[0]].innerText;
    let p2 = allbtn[pattern[1]].innerText;
    let p3 = allbtn[pattern[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        showwinner(p1);
      }
    }
  }
}
resetbtn.addEventListener("click", resetgame);
newbt.addEventListener("click", resetgame);
