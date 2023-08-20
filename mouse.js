const cursor = document.querySelector(".cursor");
let timeOut = 0;

// Follow .cursor on mouse movement
document.addEventListener("mousemove", (e) => {
  let mouseX = e.pageX;
  let mouseY = e.pageY;

  cursor.style.top = mouseY + "px";
  cursor.style.left = mouseX + "px";
  cursor.style.display = "block";

  // Remove .cursor on no mouse movement
  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeOut);
  timeOut = setTimeout(mouseStopped, 1000);
});

// Remove .cursor on mouse out of window
window.addEventListener("mouseout", (e) => {
  cursor.style.display = "none";
});
