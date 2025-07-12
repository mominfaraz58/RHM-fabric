// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".navbar a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Contact form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
        e.preventDefault();
        alert("Please fill out all fields.");
        return;
      }

      if (!email.value.includes("@")) {
        e.preventDefault();
        alert("Please enter a valid email.");
        return;
      }

      alert("Message sent successfully!");
    });
  }

  // Product image zoom on hover
  const productImg = document.querySelector(".product-img");
  if (productImg) {
    productImg.addEventListener("mouseenter", () => {
      productImg.style.transform = "scale(1.05)";
      productImg.style.transition = "transform 0.3s ease";
    });
    productImg.addEventListener("mouseleave", () => {
      productImg.style.transform = "scale(1)";
    });
  }

  // Sticky header on scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.style.position = "fixed";
      header.style.top = "0";
      header.style.width = "100%";
      header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
      header.style.zIndex = "1000";
    } else {
      header.style.position = "relative";
      header.style.boxShadow = "none";
    }
  });

  // Scroll to top button (optional)
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑";
  scrollBtn.classList.add("scroll-top-btn");
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.padding = "10px 14px";
  scrollBtn.style.background = "#2c332f";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "50%";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.display = "none";
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
});
<select id="payment" required>
  <option value="">Select Payment Method</option>
  <option value="JazzCash">JazzCash</option>
  <option value="EasyPaisa">EasyPaisa</option>
  <option value="Meezan Bank">Meezan Bank</option>
</select>