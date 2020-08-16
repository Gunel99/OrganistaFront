// Header skiny start
window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
      $("#skiny.skiny_header").slideDown(400);
  }
  else {
      $("#skiny.skiny_header").slideUp(400);
  }
});

// Back to top start
$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

var lastScrollTop = 300;

window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
      $("a.scroll").removeClass("off");
      $("a.scroll").addClass("on");
  }
  else {
      $("a.scroll").removeClass("on");
      $("a.scroll").addClass("off");
  }
});

// Main Slider In Home
$(document).ready(function(){
    $('#main_slider .sliders').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        cssEase: 'linear'
    });
});

// FRESH ARRIVALS START
$(document).ready(function () {
    $('button.slick-next').click(function () {
        $("#fresh_arrivals_carousel .cards").slick('slickNext');
    });
    $('button.slick-prev').click(function () {
        $("#fresh_arrivals_carousel .cards").slick('slickPrev');
    });
})

$(document).ready(function () {
    $('#fresh_arrivals_carousel .cards.multiple-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 1040,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 530,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});

// Testimonial part start
$(document).ready(function(){
  $('#testimonial_componies .testimonials').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      cssEase: 'linear'
  });
});

// Faq accardion part start
$(document).ready(function () {
  $("#faq_contact .accardions").find(".title").click(function () {
      if ($(this).next().css("display") === "none") {
          $(this).css({
              transition: "all 0.2s ease-out",
              background: "#f0f2f3",
              border: "1px solid #f0f2f3",
              borderRadius: "5px"
          });
          $(this).find("i").css({ color: "#18181d" });
          $(this).find("i").removeClass("fas fa-plus");
          $(this).find("i").addClass("fas fa-minus");
      }
      else {
          $(this).css({
              transition: "all 0.2s ease-out",
              background: "#ffffff",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none"
          });
          $(this).find("i").css({ color: "#838383" });
          $(this).find("i").removeClass("fas fa-minus");
          $(this).find("i").addClass("fas fa-plus");
      }

      $("#faq_contact .accardions").find(".title").not($(this)).find("i").removeClass("fas fa-minus");
      $("#faq_contact .accardions").find(".title").not($(this)).find("i").addClass("fas fa-plus");

      $("#faq_contact .accardions").find(".title").not($(this)).find("i").css({ color: "#838383" });
      $("#faq_contact .accardions").find(".title").not($(this)).css({ background: "#ffffff",  borderTop: "none",
      borderLeft: "none", borderRight: "none" });


      $(this).next().slideToggle(500);
      $("#faq_contact .accardions").find(".content").not($(this).next()).slideUp(500);
  });
});

// Product page start
let counteradd = document.querySelector("#counteradd");
let countersub = document.querySelector("#countersub");
let productcount = document.querySelector("#productcount");

counteradd.addEventListener("click", function() {
    productcount.innerText = Number(productcount.innerText) + 1;
})
    
countersub.addEventListener("click", function() {
    if(Number(productcount.innerText) > 0){
        productcount.innerText = Number(productcount.innerText) - 1;
    }
})


// TAB MENU PART START
let tab_menu_titles = document.querySelectorAll("#tab_menus .tab_menu_titles div");
let tab_menu_contents = document.querySelectorAll("#tab_menus .tab_menu_contents .content");

for (let title of tab_menu_titles) {
    title.addEventListener("click", function () {
        document.querySelector("#tab_menus .tab_menu_titles .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of tab_menu_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}








