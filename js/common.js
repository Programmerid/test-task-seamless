// Mouse scroll event for header 
window.addEventListener('scroll', function() {
    if (pageYOffset > 50) {
      document.querySelector('.header_fixed').classList.add('active')
    } else {
      document.querySelector('.header_fixed').classList.remove('active')
    }
})

$('.key_words_content').owlCarousel({
  margin:50,
  loop: false,
  items:3,
  dots: true,
  nav:false,
  responsive:{
      0:{items:1},
      768:{items:2},
      1024:{items:3}
  }
})


//Event click for hidden content
document.addEventListener('DOMContentLoaded', function() {
    let loadMoreBtn = document.querySelector('.seamless_experience_load_more_btn');
    let contentListExtra = document.querySelector('.seamless_experience_content_list_extra');
    let seamlessExperience = document.querySelector('.seamless_experience');

    if (loadMoreBtn && contentListExtra) {
        loadMoreBtn.addEventListener('click', function() {
            contentListExtra.classList.add('active');
            loadMoreBtn.classList.add('clicked');
            seamlessExperience.classList.add('active');
        });
    } else {
        console.error('Не удалось найти элементы');
    }
});

//Event click for header language
document.addEventListener('DOMContentLoaded', function() {
  let languageBtn = document.querySelector('.current');
  let contentHiddenLanguage = document.querySelector('.header_right_language_hidden');

  languageBtn.addEventListener('click', function(e) {
    e.preventDefault();
    contentHiddenLanguage.classList.add('active');
  });
});

// Event click for Our story section
document.addEventListener('DOMContentLoaded', function() {
  let items = document.querySelectorAll('.our_story_content_list_item');
  
  items.forEach(function(item) {
      item.addEventListener('click', function() {
          items.forEach(function(element) {
              element.classList.remove('active');
          });
          item.classList.add('active');
      });
  });
});

//Event click for popup contact us
document.addEventListener('DOMContentLoaded', function() {
  let btnPopupContactUs = document.querySelector('.contact_us_btn');
  let contentPopupContactUs = document.querySelector('.popup_contact_us');
  let closeBtnPopupContactUs = document.querySelector('.popup_contact_us_close');

  if (btnPopupContactUs && contentPopupContactUs) {
    btnPopupContactUs.addEventListener('click', function(e) {
      e.preventDefault();
      contentPopupContactUs.classList.add('active');
    });
  } else {
      console.error('Не удалось найти элементы');
  }

  closeBtnPopupContactUs.addEventListener('click', function(ev) {
    ev.preventDefault();
    contentPopupContactUs.classList.remove('active');
  });
});

// Event click for menu mobile header
document.addEventListener('DOMContentLoaded', function() {
  let mobileMenuBtn = document.querySelector('.header_left_menu_mobile');
  let mobileMenu = document.querySelector('.mobile_header_menu');
  let openedMenuMobileBtn = document.querySelector('.mobile_header_menu_top_btn');

  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
  });
  openedMenuMobileBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
  });
});
