document.addEventListener("DOMContentLoaded", function() {
    const spinnerWrapperEl = document.getElementsByClassName("spinner-wrapper")[0];
    if (spinnerWrapperEl) {
        setTimeout(() => {
            spinnerWrapperEl.style.opacity = "0"; // Cambia la opacidad a 0
            spinnerWrapperEl.style.pointerEvents = "none"; // Desactiva eventos de puntero para que los elementos debajo sean clicables
        }, 1000);
    } else {
        console.error("No se encontró ningún elemento con la clase 'spinner-wrapper'");
    }
});