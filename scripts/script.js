'use strict';

let question = document.querySelectorAll('.accordion__question');

question.forEach(question => {
  console.log(question);
  question.addEventListener('click', () => {
    question.classList.toggle('accordion__question__show:after');
    question.classList.toggle('accordion__question__show');
    question.nextElementSibling.classList.toggle('accordion__collapse__show');
    console.log(`is clicked question: ${question.innerHTML}`);
  });
});