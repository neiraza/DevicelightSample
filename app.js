window.addEventListener("load", function() {
  var threshold = 50;
  var className = "night";
  var body = document.querySelector("body");
  window.addEventListener("devicelight", function(event) {
    if (event.value < threshold) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }
  });
});
