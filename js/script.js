//slider
$(document).ready(function () {

  $('.intro__slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots-style',
   

  })

  $('.bestseller-slider').slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 4
        }

      },

      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3
        } 
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }

    ]
  })

  $('.category-slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    padding: 300,
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2
        }

      },

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        } 
      },
    

    ]
    
   

  })
});



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}