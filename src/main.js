var recycleCard = document.getElementById("recycle-card");
recycleCard.style.display = "none";

window.start = function () {
  document.getElementById("start").style.visibility = "hidden";
  recycleCard.style.display = "grid";

  // counter of 2 seconds before hiding the card again
  var counter = 2;
  var interval = setInterval(function () {
    counter--;
    if (counter < 0) {
      clearInterval(interval);
      recycleCard.style.visibility = "visible";
      document.getElementById("start").style.display = "block";
    }
  }, 1000);
};
