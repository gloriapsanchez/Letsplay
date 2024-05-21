//document.getElementById("understood").addEventListener("click", function() {
//  window.location.href = "index.html";
//});
document.addEventListener("DOMContentLoaded", function() {
  var googleButton = document.getElementById("googleButton");
  var bingButton = document.getElementById("bingButton");
  var duckduckgoButton = document.getElementById("duckduckgoButton");
  var returnButton = document.getElementById("returnButton");

  console.log(googleButton, bingButton, duckduckgoButton, returnButton); // Debugging line

  if (googleButton) {
      googleButton.addEventListener("click", function() {
          window.location.href = "page2.html";
      });
  }

  if (bingButton) {
      bingButton.addEventListener("click", function() {
          window.location.href = "page3.html";
      });
  }

  if (duckduckgoButton) {
      duckduckgoButton.addEventListener("click", function() {
          window.location.href = "3dmodel/index.html";
      });
  }

  if (returnButton) {
      returnButton.addEventListener("click", function() {
          window.location.href = "index.html";
      });
  }
});

/*
document.getElementById("googleButton").addEventListener("click", function() {
  window.location.href = "page2.html";
});

document.getElementById("bingButton").addEventListener("click", function() {
  window.location.href = "page3.html";
});

document.getElementById("duckduckgoButton").addEventListener("click", function() {
  window.location.href = "page4.html";
});

document.getElementById("returnButton").addEventListener("click", function() {
  window.location.href = "index.html"; // or the path to your index file
});
*/