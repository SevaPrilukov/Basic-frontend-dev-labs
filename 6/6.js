function toggleImageState(image) {
    image.classList.toggle("selected");
  }

  function deleteSelectedImages() {
    var imageContainer = document.getElementById("imageContainer");
    var selectedImages = imageContainer.getElementsByClassName("selected");
    while (selectedImages.length > 0) {
      selectedImages[0].remove();
    }
  }