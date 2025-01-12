var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("collapsed");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.textContent = this.textContent.replace("−", "+");
    } else {
      content.style.display = "block";
      this.textContent = this.textContent.replace("+", "−");
    }
  });
}
