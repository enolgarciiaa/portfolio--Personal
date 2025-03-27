document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contact");
    const contactSection = document.getElementById("contact-section");
  
    contactBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contact2");
    const contactSection = document.getElementById("contact-section2");
  
    contactBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  