function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.width = `${Math.random() * 20 + 10}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

setInterval(createBubble, 300);
