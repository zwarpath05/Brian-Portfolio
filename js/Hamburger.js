document.addEventListener('DOMContentLoaded', function() {
    const myHeader = document.getElementById("my_header");
    const BckToTop = document.getElementById("Back_To_Top");
    const c1 = document.querySelectorAll('#my_header .col_7');
    let isDisplayed = false; // Initialize a flag to track the state

    function updateInterface() {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        if (mediaQuery.matches) {
            const btnHeader = document.getElementById("HBurger");
            if (!btnHeader) {
                // Create the hamburger icon if it doesn't exist
                const btnHeader = document.createElement("div");
                btnHeader.setAttribute("id", "HBurger");
                btnHeader.textContent = "☰";
                myHeader.prepend(btnHeader);
            }

            if (isDisplayed) {
                // Display navigation when it's supposed to be displayed
                c1.forEach(function(element) {
                    element.style.display = "block";
                });
            } else {
                // Hide navigation when it's not supposed to be displayed
                c1.forEach(function(element) {
                    element.style.display = "none";
                });
            }
        } else {
            // Remove the hamburger icon when not in mobile view
            const btnHeader = document.getElementById("HBurger");
            if (btnHeader) {
                btnHeader.remove();
            }
            // Ensure that .col_7 elements are displayed on desktop view
            c1.forEach(function(element) {
                element.style.display = "block";
            });
        }
    }

    updateInterface(); // Initial call to set up the interface

    // Listen for window resize events to update the interface
    window.addEventListener('resize', updateInterface);

    // Handle click event for the hamburger icon
    myHeader.addEventListener('click', function() {
        const btnHeader = document.getElementById("HBurger");
        if (btnHeader) {
            if (isDisplayed) {
                btnHeader.textContent = "☰";
                BckToTop.style.display = "block";
                // Hide navigation when hamburger icon is clicked
                c1.forEach(function(element) {
                    element.style.display = "none";
                });
            } else {
                btnHeader.textContent = "X";
                BckToTop.style.display = "none";
                // Display navigation when hamburger icon is clicked
                c1.forEach(function(element) {
                    element.style.display = "block";
                });
            }
            isDisplayed = !isDisplayed; // Toggle the flag
        }
    });
});
