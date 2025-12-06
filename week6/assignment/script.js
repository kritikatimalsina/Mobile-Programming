// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf8Ipu08jjlmP9cdpzuuk9y-7Y0y3_i_w",
    authDomain: "mobile-programming-f8f0b.firebaseapp.com",
    projectId: "mobile-programming-f8f0b",
    storageBucket: "mobile-programming-f8f0b.firebasestorage.app",
    messagingSenderId: "841274428594",
    appId: "1:841274428594:web:f29a0469941e2291b3cdab",
    measurementId: "G-W8KHLG0J0C"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
} catch (error) {
    console.error("Firebase initialization error:", error);
}

const db = firebase.firestore();

// DOM Elements
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const statusMessage = document.getElementById('statusMessage');

// Form Submission Handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable button to prevent double submit
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        // Add a new document with a generated ID
        await db.collection("contacts").add(formData);

        // Show success message
        showStatus('Message sent successfully! We will get back to you soon.', 'success');

        // Reset form
        contactForm.reset();

    } catch (error) {
        console.error("Error adding document: ", error);
        showStatus('Error sending message. Please try again later.', 'error');
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Message</span>';
    }
});

// Helper function to show status messages
function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
    statusMessage.classList.remove('hidden');

    // Hide after 5 seconds
    setTimeout(() => {
        statusMessage.classList.add('hidden');
    }, 5000);
}
