const typed = new Typed('#type', {
      strings: ["Sneha Ramanathan", "a Developer", "a Designer", "a Creator"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true
    });

    const toggle = document.getElementById("modeToggle");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      document.body.classList.toggle("light-mode");
    });