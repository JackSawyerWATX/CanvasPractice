function changeColor() {
    var divElement1 = document.getElementById("div1");
    var divElement2 = document.getElementById("div2");
    divElement1.className = "blueback";
    divElement2.className = "orangeback";
  }
  
  function orangeback() {
    var canvas = document.getElementById("div1");
    canvas.style.backgroundColor = "orange";
  }
  
  function blueback() {
    var canvas = document.getElementById("div2");
    canvas.style.backgroundColor = "blue";
    var context = canvas.getContext("2d");
  
    context.fillStyle = "yellow";
    context.fillRect(10, 10, 40, 40);
    context.fillRect(60, 10, 40, 40);
  
    context.fillStyle = "black";
    context.font = "15px Arial";
    context.fillText("Hello!", 11, 35);
    context.fillText("Hello!", 61, 35);
  }
  