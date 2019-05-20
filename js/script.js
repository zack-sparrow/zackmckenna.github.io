function balloonbig() {
  b = document.getElementById("balloon");
  style = document.getElementById("balloon").style.fontSize;
  currentsize = parseFloat(style);
  b.style.fontSize = (currentsize + 25) + 'px';
  console.log(currentsize);
  //document.getElementById("balloon").style.fontSize = 110%;
  console.log("balloon function engaged");
}

function balloonsmall() {
  b = document.getElementById("balloon");
  style = document.getElementById("balloon").style.fontSize;
  currentsize = parseFloat(style);
  b.style.fontSize = (currentsize - 25) + 'px';
  console.log(currentsize);
  //document.getElementById("balloon").style.fontSize = 110%;
  console.log("balloon function engaged");
}

window.addEventListener("keydown", event => {
    if (event.key == "y") {
      var howbig =document.getElementById("balloon").style.fontSize;
      how = parseFloat(howbig);
      if (how > 250) {
        
      }
      console.log("Y KEY PRESSED");
      balloonbig();

    }
  });

  window.addEventListener("keydown", event => {
      if (event.key == "u") {
        console.log("Y KEY PRESSED");
        balloonsmall();
      }
    });

window.addEventListener("keydown", event => {
    if (event.key == "v") {
      document.body.style.background = "violet";
    }
  });

window.addEventListener("keyup", event => {
    if (event.key == "v") {
      document.body.style.background = "";
    }
  });
