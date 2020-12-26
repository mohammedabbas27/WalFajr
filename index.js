let navLinks = document.querySelectorAll(".hasDropdown");

navLinks.forEach((navLink) =>
  navLink.addEventListener("mouseover", function (e) {
    let currentTarget = e.currentTarget;
    let dropdown = currentTarget.querySelector(".dropdown");
    dropdown.classList.remove("closed");
    dropdown.classList.add("open");
  })
);

navLinks.forEach((navLink) =>
  navLink.addEventListener("mouseout", function (e) {
    let currentTarget = e.currentTarget;
    let dropdown = currentTarget.querySelector(".dropdown");
    dropdown.classList.remove("open");
    dropdown.classList.add("closed");
  })
);
