document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita envío por defecto

    const firstName = form.querySelector('input[name="Firstname"]');
    const lastName = form.querySelector('input[name="Lastname"]');
    const email = form.querySelector('input[name="Email"]');
    const phone = form.querySelector('input[name="Phone"]');
    const message = form.querySelector('textarea[name="mensaje"]');

    let errors = [];

    // Validaciones básicas
    if (firstName.value.trim() === "") {
      errors.push("El nombre es obligatorio.");
    }

    if (lastName.value.trim() === "") {
      errors.push("El apellido es obligatorio.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      errors.push("Introduce un email válido.");
    }

    const phoneRegex = /^[0-9\s()+-]{7,15}$/;
    if (!phoneRegex.test(phone.value)) {
      errors.push("Introduce un teléfono válido.");
    }

    if (message.value.trim().length < 10) {
      errors.push("El mensaje debe tener al menos 10 caracteres.");
    }

    // Mostrar errores o enviar
    if (errors.length > 0) {
      alert("Errores en el formulario:\n\n" + errors.join("\n"));
    } else {
      // Envío real con fetch
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert("¡Formulario enviado con éxito! 🚀");
          form.reset();
        } else {
          alert("Ocurrió un error al enviar el formulario. Intenta de nuevo.");
        }
      } catch (error) {
        alert("Error de red. Intenta más tarde.");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", () => {
    // Limpiar campos justo al enviar
    form.reset();
  });
});
