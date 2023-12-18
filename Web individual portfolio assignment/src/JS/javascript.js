const roles = [" Fullstack Developer ", " Backend Developer ", " UI/UX Designer"];
let roleIndex = 0;
let textIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
const speed = 100; // Adjust typing speed here
const targetElement = document.getElementById('typing');

if (!isDeleting && textIndex < roles[roleIndex].length) {
currentText += roles[roleIndex][textIndex];
textIndex++;
} else if (isDeleting && textIndex >= 0) {
currentText = roles[roleIndex].substring(0, textIndex);
textIndex--;
}

targetElement.innerHTML = currentText;

const typingSpeed = isDeleting ? speed / 2 : speed;

if (!isDeleting && textIndex === roles[roleIndex].length) {
isDeleting = true;
setTimeout(type, 1000); // Pause before deleting
} else if (isDeleting && textIndex === 0) {
isDeleting = false;
roleIndex = (roleIndex + 1) % roles.length;
setTimeout(type, 500); // Pause before typing the next role
} else {
setTimeout(type, typingSpeed);
}
}

document.addEventListener('DOMContentLoaded', type);