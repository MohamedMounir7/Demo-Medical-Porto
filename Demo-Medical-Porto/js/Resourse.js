console.log("hello")
function toggleText(){
    var x = document.querySelector(".Reco");
    var y = document.querySelector(".resource")
    console.log(x)
    console.log(y)
      x.style.display = "block";
      y.style.display = "none";
  }

  const goto = (href) => {
    window.location.href = href
}