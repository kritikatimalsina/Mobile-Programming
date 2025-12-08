import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyBf8Ipu08jjlmP9cdpzuuk9y-7Y0y3_i_w",
    authDomain: "mobile-programming-f8f0b.firebaseapp.com",
    databaseURL: "https://mobile-programming-f8f0b-default-rtdb.firebaseio.com",
    projectId: "mobile-programming-f8f0b",
    storageBucket: "mobile-programming-f8f0b.firebasestorage.app",
    messagingSenderId: "841274428594",
    appId: "1:841274428594:web:f29a0469941e2291b3cdab",
    measurementId: "G-W8KHLG0J0C"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const form = document.getElementById('contactForm');
const status = document.getElementById('status');

const showStatus = (message, isSuccess) => {
    status.textContent = message;
    status.className = isSuccess ? 'success' : 'error';
    setTimeout(() => status.style.display = 'none', 5000);
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };

    try {
        await push(ref(db, 'contacts'), formData);
        showStatus('Message sent successfully!', true);
        form.reset();
    } catch (error) {
        showStatus('Failed to send message. Please try again.', false);
        console.error('Error:', error);
    }
});
