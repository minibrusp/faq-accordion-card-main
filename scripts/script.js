'use strict';

let question = document.querySelectorAll('.accordion__question');

question.forEach(question => {
  console.log(question);
  question.addEventListener('click', () => {
    checkerShow();
    question.classList.toggle('accordion__question__show:after');
    question.classList.toggle('accordion__question__show');
    question.nextElementSibling.classList.toggle('accordion__collapse__show');
    console.log(`is clicked question: ${question.innerHTML}`);
  });
});


function checkerShow() {
  question.forEach(question => {
    if(question.classList.contains('accordion__question__show') === true) {
      console.log("Contains");
      question.classList.toggle('accordion__question__show:after');
      question.classList.toggle('accordion__question__show');
      question.nextElementSibling.classList.toggle('accordion__collapse__show');
    }
  });
}