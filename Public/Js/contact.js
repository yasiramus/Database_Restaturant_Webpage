//sticky navbar scrolling 
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0)
  });

// star rating system
const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.rating');
const starInput = document.getElementById('starInput');
//setting the number of clicks to false
let numOfClicks = false;
//looping through the stars
for (let i = 0; i < stars.length; i++){
  stars[i].starValue = (i + 1);
  ['mouseover','mouseout', 'click'].forEach(function (e){
    stars[i].addEventListener(e, starRate);
  })
}

//function for num of clicks
const toggle = () => {
  numOfClicks = !numOfClicks
}

//starRate function
function starRate(e) {
  let type = e.type;
  let starValue = this.starValue;
//using nested if statement
  if(type === 'click'){
    if(starValue > 1){
      rating.innerHTML = 'You rated this ' + starValue + ' stars';
    }
    //calling the toggle function
    toggle();
    starInput.value = starValue;
  }

  stars.forEach(function (element, index) {
      if (type === 'click') {
        console.log('this just for the number of clicks ' + numOfClicks)
        if( numOfClicks > 1){
            element.classList.remove('clickColor')
        }
      if (index < starValue && numOfClicks === true) {
          console.log('run')
        element.classList.add('clickColor');
      }
      else{
        element.classList.remove('clickColor')
      }
    }

    if(type === 'mouseover'){
      if(index < starValue){
        element.classList.add('over');
      }
      else{
        element.classList.remove('over');
      }
    }

    if(type === 'mouseout'){
      element.classList.remove('over')
    }
  })
}

  //contact form submission
const myFunction = () => {
    document.getElementById('form-submit').submit();
    //clearr data after submission
    document.getElementById('form-submit').reset();
  }