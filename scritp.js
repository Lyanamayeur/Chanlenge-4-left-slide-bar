document.addEventListener("DOMContentLoaded", function () {
    const OpenMenu = document.getElementById("OpenMenu");
    const CloseMenu = document.getElementById("CloseMenu");
    const slidebar = document.getElementById("slidebar");

    OpenMenu.addEventListener("click", function () {
        slidebar.style.left = "0";  // Afficher la slidebar
        OpenMenu.style.display = "none"; // Cacher le menu hamburger
    });

    CloseMenu.addEventListener("click", function () {
        slidebar.style.left = "-250px"; // Cacher la slidebar
        setTimeout(() => {
            OpenMenu.style.display = "block"; // Réafficher le menu hamburger après la fermeture
        }, 300); // Attendre la fin de l'animation
    });
    
});
