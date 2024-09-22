// Function to open the lightbox and display the clicked image
function openLightbox(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = image.src; // Set the image source in the lightbox
    lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}

// Function to toggle the mobile navigation menu
const mobileMenu = document.getElementById('mobileMenu');
const navbarLinks = document.querySelector('.navbar-links');

mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
