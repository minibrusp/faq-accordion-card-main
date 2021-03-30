document.addEventListener('DOMContentLoaded', (event) => {
  'use strict';

  // let question = document.getElementsByClassName('accordion__question');
  let question = document.querySelectorAll('.accordion__question');

  //ver#1 
  // for(let q of question) {
  //   q.addEventListener('click', function() {
  //     for(let e of question) {
  //       if(e != this) {
  //         e.classList.remove('accordion__question__show');
  //         e.nextElementSibling.classList.remove('accordion__collapse__show');
  //       }
  //       else {
  //         this.classList.toggle('accordion__question__show');
  //         this.nextElementSibling.classList.toggle('accordion__collapse__show');
  //       }
  //     }
  //   });
  // }

  // ver#2 

  // for(let q of question) {
  //   q.addEventListener('click', () => {
  //     for(let e of question) {
  //       if(e != q) {
  //         e.classList.remove('accordion__question__show');
  //         e.nextElementSibling.classList.remove('accordion__collapse__show');
  //       }
  //       else {
  //         e.classList.toggle('accordion__question__show');
  //         e.nextElementSibling.classList.toggle('accordion__collapse__show');
  //       }
  //     }
  //   });
  // }


  // ver#3 

  // const clickHandler = (event) => {
  //   for(let h of question){
  //     if(h != event.currentTarget) {
  //       console.log('Not target')
  //       h.classList.remove('accordion__question__show');
  //       h.nextElementSibling.classList.remove('accordion__collapse__show');
  //     }
  //     else {
  //       event.currentTarget.classList.toggle('accordion__question__show');
  //       event.currentTarget.nextElementSibling.classList.toggle('accordion__collapse__show');
  //     }
  //   }
  // }

  // for (let q of question) {
  //   q.addEventListener('click', clickHandler);
  // }

  // #ver 4 

  for(let q of question) {
    q.addEventListener('click', (event) => {
      for(let e of question) {
        if(e != q) {
          e.classList.remove('accordion__question__show');
          e.nextElementSibling.classList.remove('accordion__collapse__show');
        }
        else {
          event.currentTarget.classList.toggle('accordion__question__show');
          event.currentTarget.nextElementSibling.classList.toggle('accordion__collapse__show');
        }
      }
    });
  }
    console.log('DOM fully loaded and parsed');
});
