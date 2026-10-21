
/* Interactive Photo Gallery */

function upDate(previewPic) {
  console.log("Preview event triggered");
  console.log("Alt text: " + previewPic.alt);
  console.log("Image source: " + previewPic.src);

  let imageDiv = document.getElementById("image");

  imageDiv.textContent = previewPic.alt;

  imageDiv.style.backgroundImage =
    "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("Reset event triggered");

  let imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "none";

  imageDiv.textContent =
    "Hover over or focus on an image to display here.";
}

/* Keyboard Accessibility */

function addTabFocus() {
  console.log("Page loaded successfully");

  let images = document.querySelectorAll(".gallery img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");

    images[i].addEventListener("focus", function() {
      upDate(this);
    });

    images[i].addEventListener("blur", function() {
      unDo();
    });
  }

  console.log("Keyboard navigation enabled");
}

/* Run after page loads */

window.addEventListener("load", addTabFocus);
