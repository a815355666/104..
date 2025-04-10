var heading = document.getElementById("myHeading");
var text = heading.innerText;
heading.innerText = "";

for (var i = 0; i < text.length; i++) {
  (function(i) {
    setTimeout(function() {
      heading.innerText += text.charAt(i);
    }, 180 * i);
  })(i);
}
