let collectionLink = document.querySelector(".top-main-menu-1 > a");
let newInLink = document.querySelector(".top-main-menu-2 > a");
let plusSizeLink = document.querySelector(".top-main-menu-4 > a");
let sustainabilityLink = document.querySelector(".top-main-menu-5 > a");

let links = [collectionLink, newInLink, plusSizeLink, sustainabilityLink];

let collectionMenu = document.querySelector(".collection-menu");
let newInMenu = document.querySelector(".newin-menu");
let plusSizeMenu = document.querySelector(".plussize-menu");
let sustainabilityMenu = document.querySelector(".sustainability-menu");

let menus = [collectionMenu, newInMenu, plusSizeMenu, sustainabilityMenu];

let overlay = document.querySelector(".overlay");
let content = document.querySelector(".content");

let burger = document.querySelector(".mobile-menu");
let topMenu = document.querySelector(".top-main-menu");

function controlBackground(isOn) {
  let overlayHeight = document.body.offsetHeight - 110;

  if (isOn) {
    overlay.classList.remove("visible");
    content.classList.remove("blurred");
  } else {
    overlay.classList.add("visible");
    overlay.style.height = `${overlayHeight}px`;
    content.classList.add("blurred");
  }
}

if (window.innerWidth < 768) {
  for (let j = 0; j < links.length; j++) {
    links[j].addEventListener("click", function () {
      menus[j].classList.toggle("visible");
    });
  }

  burger.addEventListener("click", function () {
    if (topMenu.style.display === "block") {
      topMenu.style.display = "none";
    } else {
      topMenu.style.display = "block";
    }

    if (burger.getAttribute("src") === "images/mobile-menu.svg") {
      burger.setAttribute("src", "images/close.svg");
    } else {
      burger.setAttribute("src", "images/mobile-menu.svg");
    }
  });
} else {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let currentItem = menus[i];
      let menusWithoutCurrentItem = menus.filter(function (x) {
        return x !== currentItem;
      });

      for (let j = 0; j < menusWithoutCurrentItem.length; j++) {
        menusWithoutCurrentItem[j].classList.remove("visible");
        controlBackground(
          menus[i].classList.contains("visible") ||
            menusWithoutCurrentItem[j].classList.contains("visible")
        );
      }
      menus[i].classList.toggle("visible");
    });
  }
}

let heartCheckboxes = document.querySelectorAll(".heart-form input");
let heartImages = document.querySelectorAll(".heart-icon");

for (let x = 0; x < heartCheckboxes.length; x++) {
  heartCheckboxes[x].addEventListener("change", function () {
    if (heartCheckboxes[x].checked == true) {
      heartImages[x].setAttribute("src", "images/red-heart.svg");
    } else {
      heartImages[x].setAttribute("src", "images/heart.svg");
    }
  });
}

let productThumb = document.querySelectorAll(".product-thumb");
let mainPhoto = document.querySelector(".product-photo");
let thumbOverlay = document.getElementsByClassName("thumb-overlay");

for (let i = 0; i < productThumb.length; i++) {
  productThumb[i].addEventListener("click", function () {
    mainPhoto.style.backgroundImage = `url('images/product-photo${[
      i + 1,
    ]}.jpg')`;
    thumbOverlay[i].style.display = "none";

    let currentOverlay = thumbOverlay[i];
    let OverlayArray = Array.from(thumbOverlay);
    let remainingOverlays = OverlayArray.filter(function (x) {
      return x !== currentOverlay;
    });

    for (let x = 0; x < remainingOverlays.length; x++) {
      remainingOverlays[x].style.display = "block";
    }
  });
}

let expandableTitles = document.querySelectorAll(".expandable-title");
let expandableTexts = document.querySelectorAll(".expandable-text");

for (let i = 0; i < expandableTitles.length; i++) {
  expandableTitles[i].addEventListener("click", function () {
    expandableTexts[i].classList.toggle("active");
  });

  expandableTexts[i].addEventListener("click", function () {
    expandableTexts[i].classList.remove("active");
  });
}

function loadSplide1() {
  var splide = new Splide("#splide1", {
    perMove: 1,
    gap: "24px",
    pagination: false,
    arrows: false,
    fixedWidth: "288px",
    height: "493px",
  });

  splide.mount();
}

function loadSplide1mobile() {
  var splide = new Splide("#splide1", {
    perMove: 1,
    gap: "16px",
    arrows: false,
    fixedWidth: "152px",
    height: "296px",
  });

  splide.mount();
}

function loadSplide2() {
  var splide2 = new Splide("#splide2", {
    direction: "ttb",
    perMove: 1,
    gap: "16px",
    pagination: false,
    fixedWidth: "100%",
    height: "512px",
    autoHeight: true,
  });

  splide2.mount();
}

function loadSplide2mobile() {
  var splide2 = new Splide("#splide2", {
    perMove: 1,
    gap: "16px",
    arrows: false,
    fixedWidth: "100%",
    height: "512px",
    autoHeight: true,
  });

  splide2.mount();
}

if (document.getElementById("splide2") !== null) {
  if (window.innerWidth < 768) {
    loadSplide2mobile();
  } else {
    loadSplide2();
  }
}

if (document.getElementById("splide1") !== null) {
  if (window.innerWidth < 768) {
    loadSplide1mobile();
  } else {
    loadSplide1();
  }
}
