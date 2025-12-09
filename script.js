function addBlinkingCursor(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.add('typing');
    }
}
document.querySelectorAll('[data-cursor]').forEach(element => {
    element.classList.add('typing');
});

const descriptionElement = document.querySelector('.description');
if (descriptionElement) {
    const originalText = descriptionElement.textContent.trim();
    descriptionElement.textContent = '';
    descriptionElement.classList.add('typing');

    let i = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting && i < originalText.length) {
            descriptionElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else if (!isDeleting && i === originalText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && i > 0) {
            descriptionElement.textContent = originalText.substring(0, i - 1);
            i--;
            setTimeout(typeWriter, 30);
        } else if (isDeleting && i === 0) {
            isDeleting = false;
            setTimeout(typeWriter, 500);
        }
    }

    setTimeout(typeWriter, 500);
}

addBlinkingCursor('.about-typing');
addBlinkingCursor('.project-typing');