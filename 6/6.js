function toggleImageState(image) {
  if (!image.classList.contains("selected")) {
    image.classList.add("selected");
    image.style.border = "2px solid purple";
    image.setAttribute("data-deletable", "true");
  } else {
    image.style.border = "2px solid red";
    image.setAttribute("data-deletable", "false");
  }
}

function deleteSelectedImages() {
  var imageContainer = document.getElementById("imageContainer");
  var selectedImages = imageContainer.getElementsByClassName("selected");

  // Проверяем, можно ли удалять каждое изображение перед его удалением
  for (var i = selectedImages.length - 1; i >= 0; i--) {
    var image = selectedImages[i];
    var isDeletable = image.getAttribute("data-deletable");

    if (isDeletable === "true") {
      image.remove();
    }
  }
}