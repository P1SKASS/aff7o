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

   const burger = document.getElementById('burger');
   const nav = document.getElementById('nav');
   const actions = document.getElementById('actions');

   burger.addEventListener('click', () => {
       nav.classList.toggle('show');
       actions.classList.toggle('show');
   });