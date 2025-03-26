document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita el envío si hay errores

      const firstName = form.querySelector('input[placeholder=""][type="text"]');
      const lastName = form.querySelectorAll('input[placeholder=""][type="text"]')[1];
      const email = form.querySelector('input[type="email"]');
      const phone = form.querySelector('input[type="tel"]');
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
        // Aquí podrías enviar el formulario o hacer algo con los datos
        alert("Formulario enviado con éxito 🚀");

        // Por ejemplo, si usas fetch o AJAX, lo haces aquí.
        // form.submit(); // si quieres enviarlo de forma normal.
      }
    });
  });