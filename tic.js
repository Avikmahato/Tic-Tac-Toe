let round = 0;
function game(no) {
  let e = document.getElementById("sel");
  let opt = e.value;
  e.style.display = "none";
  let button = document.querySelectorAll(".block");
  let flag = 0;
  if (opt == "pc") {
    if (button[no - 1].innerText == "") {
      button[no - 1].textContent = "X";
      let pos = Math.floor(Math.random() * 9);
      if (button[pos].innerText == "") {
        button[pos].textContent = "O";
      } else {
        for (let i = 0; i < 9; i++) {
          if (button[i].innerText == "") {
            button[i].textContent = "O";
            break;
          }
        }
      }
    }
  }
  if (opt == "pp") {
    if (round === 0 && button[no - 1].innerText == "") {
      button[no - 1].textContent = "X";
      round = 1;
    } else if (round === 1 && button[no - 1].innerText == "") {
      button[no - 1].textContent = "O";
      round = 0;
    }
  }
  if (
    (button[0].innerText == button[1].innerText &&
      button[1].innerText == button[2].innerText &&
      button[2].innerText == "X") ||
    (button[0].innerText == button[3].innerText &&
      button[3].innerText == button[6].innerText &&
      button[6].innerText == "X") ||
    (button[0].innerText == button[4].innerText &&
      button[4].innerText == button[8].innerText &&
      button[8].innerText == "X") ||
    (button[3].innerText == button[4].innerText &&
      button[4].innerText == button[5].innerText &&
      button[5].innerText == "X") ||
    (button[6].innerText == button[7].innerText &&
      button[7].innerText == button[8].innerText &&
      button[8].innerText == "X") ||
    (button[2].innerText == button[4].innerText &&
      button[4].innerText == button[6].innerText &&
      button[6].innerText == "X") ||
    (button[2].innerText == button[5].innerText &&
      button[5].innerText == button[8].innerText &&
      button[8].innerText == "X") ||
    (button[1].innerText == button[4].innerText &&
      button[4].innerText == button[7].innerText &&
      button[7].innerText == "X")
  ) {
    flag=1;
    if (opt == "pp") {
      swal
        .fire({
          imageUrl: "images/win.gif",
          title: "Player 1 Win",
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.href = "index.html";
          }
        });
    } else {
      swal
        .fire({
          imageUrl: "images/win.gif",
          title: "You Win",
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.href = "index.html";
          }
        });
    }
  } else if (
    (button[0].innerText == button[1].innerText &&
      button[1].innerText == button[2].innerText &&
      button[2].innerText == "O") ||
    (button[0].innerText == button[3].innerText &&
      button[3].innerText == button[6].innerText &&
      button[6].innerText == "O") ||
    (button[0].innerText == button[4].innerText &&
      button[4].innerText == button[8].innerText &&
      button[8].innerText == "O") ||
    (button[3].innerText == button[4].innerText &&
      button[4].innerText == button[5].innerText &&
      button[5].innerText == "O") ||
    (button[6].innerText == button[7].innerText &&
      button[7].innerText == button[8].innerText &&
      button[8].innerText == "O") ||
    (button[2].innerText == button[4].innerText &&
      button[4].innerText == button[6].innerText &&
      button[6].innerText == "O") ||
    (button[2].innerText == button[5].innerText &&
      button[5].innerText == button[8].innerText &&
      button[8].innerText == "O") ||
    (button[1].innerText == button[4].innerText &&
      button[4].innerText == button[7].innerText &&
      button[7].innerText == "O")
  ) {
    flag=1;
    if (opt == "pp") {
      swal
        .fire({
          imageUrl: "images/win.gif",
          title: "Player 2 Won",
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.href = "index.html";
          }
        });
    } else {
      swal
        .fire({
          imageUrl: "images/lose.gif",
          title: "You Lose",
          timer: 20000,
          timerProgressBar: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.href = "index.html";
          }
        });
    }
  }
  for (let i = 0; i < 9; i++) {
    if (button[i].innerText == "") {
      flag = 1;
    }
  }
  if (flag == 0) {
    swal
      .fire({
        imageUrl: "images/tie.gif",
        title: "Game Draw!",
        timer: 20000,
        timerProgressBar: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          window.location.href = "index.html";
        }
      });
  }
}
