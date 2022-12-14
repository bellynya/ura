let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (evt) => {
  cursor.style.top = evt.pageY + "px";
  cursor.style.left = evt.pageX + "px";
});