document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    mobileMenu.addEventListener("click", function() {
        try {
            navList.classList.toggle("active");
        } catch (error) {
            console.error("Error toggling the navigation menu: ", error);
        }
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                dropdowns[i].style.display = "none";
            }
        }
    });
});
