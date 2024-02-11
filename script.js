let search = document.querySelector('.search');

let filter = function () {
    console.log('sda');
    let words = document.querySelectorAll('.lesson__transcription');
    words.forEach((item) => {
        if (!item.innerHTML[0] == search.value[0]) item.parentElement.classList.add('hidden');
    })
}

let menu = document.querySelector('.left-menu');

search.addEventListener('input', () => {
    console.log('sda');
    let words = document.querySelectorAll('.lesson__transcription');
    
    words.forEach((item) => {
        let val = search.value.toLowerCase();

        console.log(item.nextElementSibling)
        if (item.innerHTML.indexOf(val) > -1 || item.nextElementSibling.innerHTML.toLowerCase().indexOf(val) > -1　|| item.previousElementSibling.innerHTML.indexOf(val) > -1) {
            item.parentNode.classList.remove('hidden');
        } else {
            item.parentNode.classList.add('hidden');
        }
        if (search.value == '') {
            item.parentNode.classList.remove('hidden');
        }

    })

});


var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  /* if scrolling down, let it scroll out of view as normal */
  if (prevScrollpos <= currentScrollPos ){
      headerDiv.classList.remove("fixedToTop");
      headerDiv.style.top ="-7.2rem";
  }
  /* otherwise if we're scrolling up, fix the nav to the top */
  else{  
      headerDiv.classList.add("fixedToTop");
      headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
}