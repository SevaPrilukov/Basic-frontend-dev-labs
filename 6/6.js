/*function toggleImageState(image) {  //принимает параметр image, который представляет собой элемент изображения
    image.classList.toggle("selected"); //предоставляет доступ к классам элемента а метод toggle() добавляет класс, если его нет, и удаляет класс, если он уже присутствует
  }

  function deleteSelectedImages() { //Функция deleteSelectedImages() не принимает параметров. Она начинается с получения элемента контейнера изображений с помощью document.getElementById("imageContainer")
    var imageContainer = document.getElementById("imageContainer"); //получается ссылка на элемент контейнера изображений с помощью функции document.getElementById("imageContainer")
    var selectedImages = imageContainer.getElementsByClassName("selected"); //создается переменная selectedImages, которая содержит коллекцию элементов с классом "selected"
    while (selectedImages.length > 0) { //Внутри цикла while берется первый элемент из коллекции selectedImages с помощью индекса [0].
      selectedImages[0].remove(); //Цикл продолжается, и на каждой итерации удаляется следующий выбранный элемент из коллекции, пока в коллекции selectedImages не останется элементов.
    }
  }
*/
function toggleImageState(image) {
  if (!image.classList.contains("selected")) {
    image.classList.add("selected");
    image.style.border = "6px solid purple";
  } else {
    image.style.border = "6px solid red";
  }
}

function deleteSelectedImages() {
  var imageContainer = document.getElementById("imageContainer");
  var selectedImages = imageContainer.getElementsByClassName("selected");
  while (selectedImages.length > 0) {
    selectedImages[0].remove();
  }
}