// Carousel Functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentSlideIndex = 0;
const slideInterval = 3000; // 3 seconds

// Function to go to the next slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlidePosition();
}

// Function to go to the previous slide
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

// Function to update the slide position
function updateSlidePosition() {
    const offset = -currentSlideIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

// Set up the automated sliding
let slideTimer = setInterval(nextSlide, slideInterval);

// Pause sliding on hover, resume on mouse leave
track.addEventListener('mouseover', () => clearInterval(slideTimer));
track.addEventListener('mouseleave', () => slideTimer = setInterval(nextSlide, slideInterval));




// Auto play the slides
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 5000);

// Booking Form Validation
function validateBookingForm() {
    const checkin = document.getElementById("checkin-date").value;
    const checkout = document.getElementById("checkout-date").value;

    if (new Date(checkin) >= new Date(checkout)) {
        alert("Check-out date must be after check-in date.");
        return false;
    }
    return true;
}

// Toggle Navigation
function toggleNav() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
}

// Navigation Active Link
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Contact Form Validation
function validateContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}

// Handle login/logout functionality
let loginBtn = document.getElementById('login-btn');
let profilePic = document.getElementById('profile-pic');
let accountBtn = document.getElementById('account-btn');

// Function for handling login success
function handleLoginSuccess() {
    loginBtn.classList.add('hidden'); // Hide login button
    profilePic.classList.remove('hidden'); // Show profile picture
    accountBtn.classList.remove('hidden'); // Show account manager button
}

// Function for handling logout
function handleLogout() {
    loginBtn.classList.remove('hidden'); // Show login button
    profilePic.classList.add('hidden'); // Hide profile picture
    accountBtn.classList.add('hidden'); // Hide account manager button
}

// Room Filter Functionality
function filterRooms() {
    const roomType = document.getElementById('room-type').value;
    const rooms = document.querySelectorAll('.room');

    rooms.forEach(room => {
        // Show all rooms if 'all' is selected, or filter by the selected category
        if (roomType === 'all' || room.getAttribute('data-category') === roomType) {
            room.style.display = 'block';  // Show the room
        } else {
            room.style.display = 'none';  // Hide the room
        }
    });
}

