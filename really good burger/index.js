document.addEventListener("click", docActions);

function docActions(e) {
  const targetElement = e.target;

  toggleClassToHtml(targetElement);

  if (targetElement.closest("[data-goto]")) {
    document.documentElement.classList.contains("menu-open")
      ? document.documentElement.classList.remove("menu-open")
      : null;
    scrollToEl(targetElement);
    e.preventDefault();
  }
}

//тоглим класс на html якщо елемент відповідає заданому css селектору
function toggleClassToHtml(element) {
  if (element.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  }
}

//скролимо до заданого елемента
function scrollToEl(targetElement) {
  const goTo = targetElement.closest("[data-goto]").dataset.goto;
  // console.log(goTo);
  const goToEl = document.querySelector(goTo);
  // console.log(goToEl);
  const headerHeight = document.querySelector(".header").offsetHeight; //высота элемента с учётом вертикальных полей и границ в пикселях.
  // console.log(headerHeight);

  if (goToEl) {
    window.scrollTo({
      top: goToEl.offsetTop - (headerHeight + 15), //возвращает расстояние текущего элемента по отношению к верхней части
      behavior: "smooth", //определяет поведение прокрутки для любого элемента на странице.
    });
  }
}
