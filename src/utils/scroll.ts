const scroll = () => {
  const menuLinks = document.querySelectorAll(".scroll");

  menuLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 75,
      behavior: "smooth",
    });
  }

  const scrollDown = document.querySelector(".scroll-down") as HTMLElement;
  const posicionDesaparicion = 100;

  window.addEventListener("scroll", function () {
    let scrollPosY = document.documentElement.scrollTop;
    if (scrollPosY >= posicionDesaparicion) {
      scrollDown.classList.add("hidden");
    } else {
      scrollDown.classList.remove("hidden");
    }
  });
};

export default scroll;
