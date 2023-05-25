function toggleImageState(image) {
  if (!image.classList.contains("selected")) { // Проверяем, нет ли у изображения класса "selected"
    image.classList.add("selected"); // Если класса нет, то добавляем его
    image.style.border = "2px solid purple"; // Устанавливаем фиолетовую границу
    image.setAttribute("data-deletable", "true"); // Устанавливаем атрибут "data-deletable" со значением "true" (можно удалить)
  } else {
    image.style.border = "2px solid red"; // Если класс "selected" уже присутствует, устанавливаем красную границу
    image.setAttribute("data-deletable", "false"); // Устанавливаем атрибут "data-deletable" со значением "false" (нельзя удалить)
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