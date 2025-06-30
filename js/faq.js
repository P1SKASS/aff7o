    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(q => {
    q.addEventListener('click', () => {
        const isActive = q.classList.contains('active');

        // Закрыть все
        questions.forEach(el => {
            el.classList.remove('active');
            const answer = el.nextElementSibling;
            answer.style.maxHeight = null;
        });

        if (!isActive) {
            q.classList.add('active');
            const answer = q.nextElementSibling;
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});