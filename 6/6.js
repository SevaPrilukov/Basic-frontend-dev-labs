function toggleImageState(image) {
  if (!image.classList.contains("selected")) {
    image.classList.add("selected"); // Добавляем класс "selected" к изображению
    image.style.border = "6px solid purple"; // Устанавливаем фиолетовую границу
    image.setAttribute("data-deletable", "true"); // Устанавливаем атрибут "data-deletable" со значением "true"
  } else if (image.style.border === "6px solid red") {
    image.style.border = "6px solid purple"; // Если граница изображения уже красная, изменяем цвет границы на фиолетовый
    image.setAttribute("data-deletable", "true");
  } else {
    image.style.border = "6px solid red"; // Если изображение уже выбрано и граница не красная, устанавливаем красную границу
    image.setAttribute("data-deletable", "false"); // Устанавливаем атрибут "data-deletable" со значением "false"
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