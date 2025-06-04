const btns = document.querySelectorAll(".question-collapse-btn");
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    const cardContext = card.querySelector('.question-card-context');
    if (cardContext.classList.contains('hidden')) {
      cardContext.classList.remove('hidden');
    } else {
      cardContext.classList.add('hidden');
    }

    const showIcon = btn.querySelector(".fa-solid")

    if (showIcon.classList.contains('fa-plus')) {
      showIcon.classList.remove('fa-plus');
      showIcon.classList.add('fa-minus');
    } else {
      showIcon.classList.remove('fa-minus');
      showIcon.classList.add('fa-plus');
    }

  });
});