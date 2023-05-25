function toggleImageState(image) {
  if (!image.classList.contains("selected")) {
    image.classList.add("selected");
    image.style.border = "6px solid purple";
    image.setAttribute("data-deletable", "true");
  } else if (image.style.border === "6px solid red") {
    image.style.border = "6px solid purple"; // Изменяем цвет границы на фиолетовый
    image.setAttribute("data-deletable", "true");
  } else {
    image.style.border = "6px solid red";
    image.setAttribute("data-deletable", "false");
  }
}

function deleteSelectedImages() {
  var imageContainer = document.getElementById("imageContainer"); // Получаем ссылку на контейнер изображений
  var selectedImages = imageContainer.getElementsByClassName("selected"); // Получаем коллекцию элементов с классом "selected"

  // Проверяем, можно ли удалять каждое изображение перед его удалением
  for (var i = selectedImages.length - 1; i >= 0; i--) {
    var image = selectedImages[i];
    var isDeletable = image.getAttribute("data-deletable"); // Получаем значение атрибута "data-deletable"

    if (isDeletable === "true") { // Если значение равно "true", то изображение можно удалить
      image.remove(); // Удаляем изображение
    }
  }
}