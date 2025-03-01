// main carousel
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.control-prev');
const nextBtn = document.querySelector('.control-next');
const indicatorContainer = document.querySelector('.indicator-container');
let index = 0;
let autoSlideInterval;

// Create indicators dynamically
slides.forEach((_, i) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => {
        moveToSlide(i);
        resetAutoSlide();
    });
    indicatorContainer.appendChild(indicator);
});

// Function to update active indicator
const updateIndicators = () => {
    document.querySelectorAll('.indicator').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
};

// Function to move slides
const moveToSlide = (i) => {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;
    updateIndicators();
};

// Function to go to the next slide
const nextSlide = () => {
    index = (index === slides.length - 1) ? 0 : index + 1;
    moveToSlide(index);
};

// Function to start auto-slide
const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 2 seconds
};

// Function to reset auto-slide when user interacts
const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
};

// Event Listeners for Buttons
prevBtn.addEventListener('click', () => {
    index = (index === 0) ? slides.length - 1 : index - 1;
    moveToSlide(index);
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    index = (index === slides.length - 1) ? 0 : index + 1;
    moveToSlide(index);
    resetAutoSlide();
});

// Start Auto Slide on Page Load
startAutoSlide();

//

document.addEventListener("DOMContentLoaded", function () {
    const showcaseContent = document.querySelector(".showcase-content");

    function revealOnScroll() {
        const sectionPos = showcaseContent.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            showcaseContent.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});


//CHAT BOX
document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chatButton");
    const chatContainer = document.getElementById("chatContainer");
    const closeChat = document.getElementById("closeChat");
    const chatBox = document.getElementById("chatBox");
    const messageInput = document.getElementById("messageInput");
    const sendBtn = document.getElementById("sendBtn");

    // Open chat box with animation
    chatButton.addEventListener("click", function () {
        chatContainer.classList.add("show");
        chatButton.style.display = "none";
    });

    // Close chat box smoothly
    closeChat.addEventListener("click", function () {
        chatContainer.classList.remove("show");
        setTimeout(() => {
            chatButton.style.display = "flex";
        }, 300);
    });

    // Send message and return to floating
    sendBtn.addEventListener("click", function () {
        sendMessage();
    });

    // Handle Enter key to send message
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === "") return;

        // Create message bubble
        const messageBubble = document.createElement("div");
        messageBubble.classList.add("chat-message", "user-message");
        messageBubble.textContent = messageText;

        // Append to chat box
        chatBox.appendChild(messageBubble);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear input
        messageInput.value = "";

        // Return to floating button after 3 seconds
        setTimeout(() => {
            chatContainer.classList.remove("show");
            setTimeout(() => {
                chatButton.style.display = "flex";
            }, 300);
        }, 3000);
    }
});

